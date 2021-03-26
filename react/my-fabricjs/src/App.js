import React from 'react';

import 'fabric-webpack';

import DesignCanvas from './DesignCanvas';
import Image from './Image';
import Rect from './Rect';
import Circle from './Circle';

const App = () => (
  <div>
    <DesignCanvas>
      <Image url="https://http.cat/100" scale={0.2} top={100} />
      <Rect width={100} height={100} fill="blue" />
      <Circle radius={50} top={200} />
    </DesignCanvas>
  </div>
);

export default App;
