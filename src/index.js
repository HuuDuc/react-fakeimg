import React from 'react'
import PropTypes from 'prop-types'

class FakeImg extends React.Component {

  componentDidMount() {
    if (this.props.onDidMount) this.props.onDidMount();
  }

  componentWillUnMount() {
    if (this.props.onUnMount) this.props.onUnMount();
  }

  canvasToUrl = () => {
    const { height, width, bgColor, fontColor, text } = this.props;

    // Init Element
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    // canvas size
    canvas.height = height;
    canvas.width = width;

    // Rectangle
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, width, height);

    const fontSize = Math.round(width / 10);

    // Text settings
    const txt = text || `${width} x ${height}`;
    ctx.fillStyle = fontColor;
    ctx.font = `500 ${fontSize < 12 ? 12 : fontSize}px sans-serif`;
    ctx.textBaseline = 'middle';

    // Write the text in the context
    ctx.fillText(
      txt,
      (width / 2 - (ctx.measureText(txt).width / 2)),
      height / 2
    );

    // Return canvas as data URL
    return canvas.toDataURL();
  }

  render() {
    const {
      alt,
      className,
      id,
      onClick,
      onMouseEnter,
      onMouseLeave,
      style
    } = this.props;
    
    const props = {
      alt,
      src: this.canvasToUrl()
    };

    if (className !== undefined) props.className = className;
    if (id !== undefined) props.id = id;

    // Add event if have
    if (onClick !== undefined) props.onClick = () => onClick();
    if (onMouseEnter !== undefined) props.onMouseEnter = () => onMouseEnter();
    if (onMouseLeave !== undefined) props.onMouseLeave = () => onMouseLeave();

    // Add style
    if (style !== undefined) props.style = style;

    // Create element via React API
    return React.createElement('img', props)
  }

}

FakeImg.propTypes = {
  // alt attribute require in HTML5
  alt: PropTypes.string.isRequired,
  // Background color
  bgColor: PropTypes.string,
  // className if need className attribute
  className: PropTypes.string,
  // Font color
  fontColor: PropTypes.string,
  // height size
  height: PropTypes.number.isRequired,
  // Id
  id: PropTypes.string,
  // text to replace "width x height"
  text: PropTypes.string,
  // css style
  style: PropTypes.object,
  // width size,
  width: PropTypes.number.isRequired,
  // event onClick
  onClick: PropTypes.func,
  // event onDidMount
  onDidMount: PropTypes.func,
  // event onMouseEnter
  onMouseEnter: PropTypes.func,
  // event onMouseLeave
  onMouseLeave: PropTypes.func,
  // event onUnMount
  onUnMount: PropTypes.func
};

FakeImg.defaultProps = {
  bgColor: '#c19d67',
  fontColor: '#3a2306'
};

export default FakeImg;
