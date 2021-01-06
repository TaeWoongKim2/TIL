/* ES6 */
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';
import { download } from 'downloadjs';

const sourceNode = document.getElementById('source');
 
htmlToImage.toPng(sourceNode)
  .then(function (dataUrl) {
    console.log(dataUrl);
    var img = new Image();
    img.src = dataUrl;
    document.body.appendChild(img);
  })
  .then(function (dataUrl) {
    download(dataUrl, 'banner.png');
  })
  .catch(function (error) {
    console.error('oops, something went wrong!', error);
  });

htmlToImage.toBlob(sourceNode)
  .then(function (blob) {
    window.saveAs(blob, 'my-node.png');
  });
  