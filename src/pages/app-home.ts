import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { TemplateResult } from 'lit-html';

import 'https://imreboersma.github.io/Beter-dan-de-MIDI/assets/index.min.js';
import '../components/custom-audio-player';

@customElement('app-home')
export class AppHome extends LitElement {
  _download() {
    alert("Downloading happiness...");
  }

  firstUpdated() {
    const canvas = this.shadowRoot?.getElementById('my-canvas') as HTMLCanvasElement;
    // @ts-ignore
    new ConfettiGenerator({ target: canvas, max: 100 }).render();
  }

  static styles = css`
  #my-canvas {
    position: absolute;
    z-index: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

  #main-image {
    z-index:2;
    border-radius: 10px;
    max-width: 70%;
    width: auto;
    aspect-ratio: 1/1;
  }

  @media screen and (min-width: 768px) {
    #main-image {
      max-width: 60%;
    }
  }

  @media screen and (min-width: 992px) {
    #main-image {
      max-width: 60%;
    }
  }

  @media screen and (min-width: 1024px) {
    #main-image {
      max-width: 40%;
    }
  }

  #content {
    z-index: 1;
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;
  }

  button {
    z-index: 2;
    padding: 15px;
    background-color: #f08080;
    border: none;
    border-radius: 5px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.2s ease;
    max-width: 80%;
  }

  button:hover {
    background-color: #e36969;
  }
  .audio-player-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 20px;
  }
    `;

  render() {
    const renderAudios: TemplateResult[] = [];
    const originalAudios = [
      {
        title: "Bloom - The Paper Kites",
        src: "https://diviextended.com/wp-content/uploads/2021/10/sound-of-waves-marine-drive-mumbai.mp3",
      },
      {
        title: "One Of These Nights - Eagles",
        src: "https://diviextended.com/wp-content/uploads/2021/10/sound-of-waves-marine-drive-mumbai.mp3",
      },
      {
        title: "Vivo Per Lei - Andrea Bocelli",
        src: "https://diviextended.com/wp-content/uploads/2021/10/sound-of-waves-marine-drive-mumbai.mp3",
      },
      {
        title: "Umbrella - The Baseballs",
        src: "https://diviextended.com/wp-content/uploads/2021/10/sound-of-waves-marine-drive-mumbai.mp3",
      },
      {
        title: "Walking On Sunshine - Katrina And The Waves",
        src: "https://diviextended.com/wp-content/uploads/2021/10/sound-of-waves-marine-drive-mumbai.mp3",
      },
    ];

    originalAudios.forEach(audio => {
      renderAudios.push(html`<custom-audio-player title="${audio.title}" src="${audio.src}"></custom-audio-player>`);
    });
    return html`
    <canvas id="my-canvas"></canvas>
      <div id="content">
      <img src="https://imreboersma.github.io/Beter-dan-de-MIDI/assets/front.jpg" width="900" alt="Happy Image" id="main-image" />
      <div class="audio-player-container">
          ${renderAudios}
      </div>
      <button @click="${this._download}" >Download de muziek!</button>
    </div>
    `;
  }
}
