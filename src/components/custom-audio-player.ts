import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('custom-audio-player')
class CustomAudioPlayer extends LitElement {
  [x: string]: unknown;
  static get properties() {
    return {
      title: { type: String },
      src: { type: String },
    };
  }

  static styles = css`
    .container {
      display: flex;
      flex-grow: 1;
      flex-direction: column;
      align-items: center;
    }
  `;

  render() {
    return html`
      <div class="container">
      <span class="song-title">${this.title}</span>
      <audio class="audio-player" src="${this.src}" controls />
      </div>
    `;
  }
}

customElements.get('custom-audio-player') || customElements.define('custom-audio-player', CustomAudioPlayer);
