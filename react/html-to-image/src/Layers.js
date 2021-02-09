import React, { useRef } from 'react';
import * as htmlToImage from 'html-to-image';

function Layers() {
  const layersRef = useRef();

  const handleClick = () => {
    console.log('>>>', layersRef);
    const layers = layersRef.current;

    htmlToImage.toPng(layers, {
      width: 250,
      height: 250,
      quality: 1,
      cacheBust: true,
    })
      .then(function (dataUrl) {
        var img = new Image();
        img.src = dataUrl;
        console.log('>>>', dataUrl);
        document.body.appendChild(img);
      })
      .catch(function (error) {
        console.error('oops, something went wrong!', error);
      });
  }

  return (
    <>
      <section className="layers" ref={layersRef}>
        <div className="layer"></div>
        <div className="layer"></div>
        <div className="layer"></div>
      </section>
      <button type="button" onClick={handleClick}>다운로드</button>
    </>
  );
}

export default Layers;
