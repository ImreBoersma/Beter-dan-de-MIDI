import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { TemplateResult } from 'lit-html';

import '../../public/assets/index.min.js';
import '../components/custom-audio-player';

type Audio = {
  title: string;
  src: string;
  filename: string;
};

@customElement('app-home')
export class AppHome extends LitElement {

  public originalAudios: Audio[] = [
    {
      title: "Bloom - The Paper Kites",
      src: "https://imreboersma.github.io/Beter-dan-de-MIDI/assets/audio/Bloom%20-%20The%20Paper%20Kites.mp3",
      filename: "Bloom - The Paper Kites.mp3",
    },
    {
      title: "One Of These Nights - Eagles",
      src: "https://imreboersma.github.io/Beter-dan-de-MIDI/assets/audio/One%20Of%20These%20Nights%20-%20Eagles.mp3",
      filename: "One Of These Nights - Eagles.mp3",
    },
    {
      title: "Vivo Per Lei - Andrea Bocelli",
      src: "https://imreboersma.github.io/Beter-dan-de-MIDI/assets/audio/Vivo%20Per%20Lei%20-%20Andrea%20Bocelli.mp3",
      filename: "Vivo Per Lei - Andrea Bocelli.mp3",
    },
    {
      title: "Umbrella - The Baseballs",
      src: "https://imreboersma.github.io/Beter-dan-de-MIDI/assets/audio/Umbrella%20-%20The%20Baseballs.mp3",
      filename: "Umbrella - The Baseballs.mp3",
    },
    {
      title: "Walking On Sunshine - Katrina And The Waves",
      src: "https://imreboersma.github.io/Beter-dan-de-MIDI/assets/audio/Walking%20On%20Sunshine%20-%20Katrina%20And%20The%20Waves.mp3",
      filename: "Walking On Sunshine - Katrina And The Waves.mp3",
    },
  ];

  firstUpdated() {
    const canvas = this.shadowRoot?.getElementById('my-canvas') as HTMLCanvasElement;
    // @ts-ignore
    new ConfettiGenerator({ target: canvas, max: 100, rotate: true, animate: true  }).render();
  }

  static styles = css`

  #my-canvas {
    position: absolute;
    z-index: 0;
    top: 0;
    right: 0;
  }

  #main-image {
    z-index:2;
    border-radius: 1rem;
    max-width: 70%;
    width: auto;
    aspect-ratio: 1/1;
  }

  @media screen and (min-width: 768px) {
    #main-image {
      max-width: 70%;
    }
  }

  @media screen and (min-width: 992px) {
    #main-image {
      max-width: 70%;
    }
  }

  @media screen and (min-width: 1024px) {
    #main-image {
      max-width: 60%;
    }
  }

  #content {
    z-index: 1;
    text-align: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    gap: 2rem;
    padding: 2rem;
    padding-top: 10rem;
  }

  #download-button {
    z-index: 2;
    padding: 1rem;
    background-color: #F08080;
    border: none;
    border-radius: 1rem;
    color: #151515;
    font-weight: bold;
    cursor: pointer;
    -webkit-transition: background-color 0.2s ease;
    -o-transition: background-color 0.2s ease;
    transition: background-color 0.2s ease;
    text-decoration: none;
  }

  #download-button:hover {
    background-color: #E15B5B;
    color: #000000;
  }
  .audio-player-container {
    z-index: 2;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
        -ms-flex-direction: row;
            flex-direction: row;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -ms-flex-wrap: wrap;
        flex-wrap: wrap;
    -ms-flex-pack: distribute;
        justify-content: space-evenly;
    gap: 1rem;
  }
    `;

  render() {
    const renderAudios: TemplateResult[] = [];

    this.originalAudios.forEach(audio => {
      renderAudios.push(html`<custom-audio-player title="${audio.title}" src="${audio.src}"></custom-audio-player>`);
    });

    return html`
    <canvas id="my-canvas"></canvas>
    <div id="content">
        <img src="https://imreboersma.github.io/Beter-dan-de-MIDI/assets/front.webp" width="900" alt="Happy Image" id="main-image" />
        <div class="audio-player-container">
          ${renderAudios}
        </div>
        <a target="_blank" id="download-button" href="https://imreboersma.github.io/Beter-dan-de-MIDI/assets/audio/Muziek%20van%20de%20bruiloft.zip" download="Muziek van de bruiloft.zip">Download de muziek!</a>
      </div>
    `;
  }
}
