import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { TemplateResult } from 'lit-html';

import '../components/custom-audio-player.js';

type Audio = {
  title: string;
  src: string;
  filename: string;
};

@customElement('app-home')
export class AppHome extends LitElement {

  static styles = css`
  :host {
    display: block;
    margin: 0;
    padding: 0;
    height: 100vh;
    overflow: hidden;
  }

  #content {
    position: relative;
    z-index: 1;
    height: 100vh;
    width: 100vw;
    overflow: hidden; /* prevent content from spilling */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 2rem;
    padding: 2rem;
    box-sizing: border-box;
  }
  #my-canvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    background-color: #fffeee;
    pointer-events: none;
  }

  #main-image {
    max-width: 65%;
    max-height: 65%;
    width: auto;
    aspect-ratio: 1 / 1;
    border-radius: 1rem;
  }

  .download-button {
    z-index: 2;
    padding: 1rem;
    background-color: #F08080;
    border: none;
    border-radius: 1rem;
    color: #151515;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.2s ease;
    text-decoration: none;
  }

  .download-button:hover {
    background-color: #E15B5B;
    color: #000000;
  }

  .audio-player-container {
    z-index: 2;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }
`;

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
    const ConfettiGenerator = (window as any)?.ConfettiGenerator;

    new ConfettiGenerator({ target: canvas, max: 99, rotate: true, animate: true }).render();
  }

  render() {
    const renderAudios: TemplateResult[] = this.originalAudios.map(audio =>
      html`<custom-audio-player title="${audio.title}" src="${audio.src}"></custom-audio-player>`
    );

    return html`
    <canvas id="my-canvas"></canvas>
    <div id="content">
        <img src="https://imreboersma.github.io/Beter-dan-de-MIDI/assets/front.webp" width="900" alt="Happy Image" id="main-image" />
        <div class="audio-player-container">
          ${renderAudios}
        </div>
        <a target="_blank" class="download-button" href="https://imreboersma.github.io/Beter-dan-de-MIDI/assets/audio/Muziek%20van%20de%20bruiloft.zip" download="Muziek van de bruiloft.zip">Download de muziek!</a>
      </div>
    `;
  }
}
