import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('custom-audio-player')
class CustomAudioPlayer extends LitElement {
  @property({ type: String }) title!: string;
  @property({ type: String }) src!: string;

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
        <span>${this.title}</span>
        <audio src="${this.src}" controls></audio>
      </div>
    `;
  }
}