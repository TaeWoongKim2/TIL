import React from 'react';
import { Surface, Image, Text } from 'react-canvas';

function CustomCanvas() {
  const surfaceWidth = window.innerWidth;
  const surfaceHeight = window.innerHeight;

  const getImageHeight = () => {
    return Math.round(window.innerHeight / 2);
  };

  const imageStyle = {
    top: 0,
    left: 0,
    width: window.innerWidth,
    height: getImageHeight()
  };

  const textStyle = {
    top: getImageHeight() + 10,
    left: 0,
    width: window.innerWidth,
    height: 20,
    lineHeight: 20,
    fontSize: 12
  };

  return (
    <section>
      <Surface width={surfaceWidth} height={surfaceHeight} left={0} top={0}>
        <Image style={imageStyle} src='../public/logo512.png' />
        <Text style={textStyle}>
          Here is some text below an image.
        </Text>
      </Surface>
    </section>
  );
}

export default CustomCanvas;