import React, { useState, useEffect } from 'react';

import { fabric } from 'fabric';

const App = () => {
  const [canvas, setCanvas] = useState('');

  useEffect(() => {
    setCanvas(initCanvas());
  }, []);

  const initCanvas = () => (
    new fabric.Canvas('canvas', {
      height: 300,
      width: 300,
      backgroundColor: 'pink'
    })
  );

  return(
    <div>
      <h1>Fabric.js on React - fabric.Canvas('...')</h1>
      <canvas id="canvas" />
    </div>
  );
}
export default App;
