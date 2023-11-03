var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "react"], function (require, exports, react_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    react_1 = __importDefault(react_1);
    const FakeImg = ({ alt, bgColor, className, fontColor, height, id, text, style, width, onClick, onMount, onMouseEnter, onMouseLeave, onUnMount, }) => {
        // did mount
        react_1.default.useEffect(() => {
            if (onMount)
                onMount();
            // will unmount
            return () => {
                if (onUnMount)
                    onUnMount();
            };
        }, []);
        let finalStyle = style ? { ...style } : {};
        const canvasToUrl = () => {
            // Init Element
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");
            // canvas size
            canvas.height = height;
            canvas.width = width;
            // 4k display or retina display
            if (window.devicePixelRatio > 1) {
                canvas.width = width * window.devicePixelRatio;
                canvas.height = height * window.devicePixelRatio;
                canvas.style.width = width + "px";
                canvas.style.height = height + "px";
                finalStyle = {
                    ...finalStyle,
                    height,
                    width
                };
                ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
            }
            // Rectangle
            ctx.fillStyle = bgColor;
            ctx.fillRect(0, 0, width, height);
            ctx.roundRect(0, 0, width, height, [5, 5, 5, 5]);
            const fontSize = Math.round(width / 10);
            // Text settings
            const txt = text || `${width}x${height}`;
            ctx.fillStyle = fontColor;
            ctx.font = `500 ${fontSize < 12 ? 12 : fontSize}px sans-serif`;
            ctx.textBaseline = "middle";
            // Write the text in the context
            ctx.fillText(txt, width / 2 - ctx.measureText(txt).width / 2, height / 2);
            // Return canvas as data URL
            return canvas.toDataURL();
        };
        const imgProps = {
            alt: alt || `fakeimg_${width}x${height}`,
            src: canvasToUrl(),
        };
        if (typeof className === "string" && className !== "")
            imgProps.className = className;
        if (typeof className === "string" && id !== "")
            imgProps.id = id;
        // Add event if have
        if (onClick)
            imgProps.onClick = () => onClick();
        if (onMouseEnter)
            imgProps.onMouseEnter = () => onMouseEnter();
        if (onMouseLeave)
            imgProps.onMouseLeave = () => onMouseLeave();
        // Add style
        imgProps.style = finalStyle;
        // Create element via React API
        return react_1.default.createElement("img", imgProps);
    };
    FakeImg.defaultProps = {
        bgColor: "#c19d67",
        fontColor: "#3a2306",
    };
    exports.default = FakeImg;
});
