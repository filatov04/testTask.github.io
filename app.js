import './app.scss';
import './src/widget/progressBar.js';
import { progressBar } from './src/widget/progressBar.js';

document.querySelector('#app').innerHTML = `
  <main id='main'>
  </main>
`
progressBar('main');