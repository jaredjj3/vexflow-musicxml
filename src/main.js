import Vex from './index.js';

// const file1 = 'ActorPreludeSample.xml';
const file1 = 'BeetAnGeSample.xml';

loadXMLDoc();

function loadXMLDoc() {
  const xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      // eslint-disable-next-line no-undef
      const canvas = $('#canvas')[0];
      // eslint-disable-next-line no-unused-vars
      const renderer = new Vex.Flow.MusicXmlRenderer(this.response, canvas, true);
    }
  };
  xmlhttp.open('GET', file1, true);
  xmlhttp.send();
}