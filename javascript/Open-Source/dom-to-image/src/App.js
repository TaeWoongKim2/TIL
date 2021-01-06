import logo from './logo.svg';
import './App.css';
import Dom from './Dom';

import * as htmlToImage from 'html-to-image';
// import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';
// import { download } from 'downloadjs';

function App() {

  function getBannerImage({ nodeId, width, height }) {
    const sourceNode = document.getElementById(nodeId);

    // htmlToImage.toPng(sourceNode)
    //   .then(function (dataUrl) {
    //     console.log(dataUrl);
    //     var img = new Image();
    //     img.src = dataUrl;
    //     document.body.appendChild(img);
    //     return dataUrl;
    //   })
    //   .catch(function (error) {
    //     console.error('oops, something went wrong!', error);
    //   });
    htmlToImage.toJpeg(sourceNode, { quality: 1.0, pixelRatio: 1, width, height })
      .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'banner.jpeg';
        link.href = dataUrl;
        link.click();
      });
  };
  

  return (
    <>
      <div id="source" className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Test <code>HTML-to-Image</code>
            <br/>
            and get a PNG image base64-encoded data URL and display it right away!
          </p>
        </header>
      </div>
      <button
        type="button"
        onClick={() => getBannerImage({ nodeId: 'source', width: 250, height: 250})}
      >
        Get React Image
      </button>
      <Dom />
      <button
        type="button"
        onClick={() => getBannerImage({ nodeId: 'preview', width: 250, height: 250})}
      >
        Get Preview Image
      </button>
    </>
  );
}

export default App;
