import React from "react"

type TypeProps = {
  alt: string
  bgColor: string
  className: string
  fontColor: string
  height: number
  id: string
  text: string
  style: React.CSSProperties
  width: number
  onClick: () => void
  onMount: () => void
  onMouseEnter: () => void
  onMouseLeave: () => void
  onUnMount: () => void
}

type ImgProps = {
  alt: string
  className?: string
  id?: string
  onClick?: () => void
  onMouseEnter?: () => void
  onMouseLeave?: () => void
  src: string
  style?: React.CSSProperties
}

const FakeImg = ({
  alt,
  bgColor,
  className,
  fontColor,
  height,
  id,
  text,
  style,
  width,
  onClick,
  onMount,
  onMouseEnter,
  onMouseLeave,
  onUnMount,
}: TypeProps) => {
  // did mount
  React.useEffect(() => {
    if (onMount) onMount()
    // will unmount
    return () => {
      if (onUnMount) onUnMount()
    }
  }, [])

  let finalStyle: React.CSSProperties = style ? { ...style } : {};

  const canvasToUrl = () => {
    // Init Element
    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D
    

    // canvas size
    canvas.height = height
    canvas.width = width

    // 4k display or retina display
    if (window.devicePixelRatio > 1) {
      canvas.width = width * window.devicePixelRatio
      canvas.height = height * window.devicePixelRatio
      canvas.style.width = width + "px"
      canvas.style.height = height + "px"
      finalStyle = {
        ...finalStyle,
        height,
        width
      }
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    // Rectangle
    ctx.fillStyle = bgColor
    ctx.fillRect(0, 0, width, height)
    ctx.roundRect(0, 0, width, height, [5, 5, 5, 5]);

    const fontSize = Math.round(width / 10)

    // Text settings
    const txt = text || `${width}x${height}`
    ctx.fillStyle = fontColor
    ctx.font = `500 ${fontSize < 12 ? 12 : fontSize}px sans-serif`
    ctx.textBaseline = "middle"

    // Write the text in the context
    ctx.fillText(txt, width / 2 - ctx.measureText(txt).width / 2, height / 2)

    // Return canvas as data URL
    return canvas.toDataURL()
  }

  const imgProps: ImgProps = {
    alt: alt || `fakeimg_${width}x${height}`,
    src: canvasToUrl(),
  }

  if (typeof className === "string" && className !== "")
    imgProps.className = className
  if (typeof className === "string" && id !== "") imgProps.id = id

  // Add event if have
  if (onClick) imgProps.onClick = () => onClick()
  if (onMouseEnter) imgProps.onMouseEnter = () => onMouseEnter()
  if (onMouseLeave) imgProps.onMouseLeave = () => onMouseLeave()

  // Add style
  imgProps.style = finalStyle

  // Create element via React API
  return React.createElement("img", imgProps)
}

FakeImg.defaultProps = {
  bgColor: "#c19d67",
  fontColor: "#3a2306",
}

export default FakeImg
