import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('custom-audio-player')
class CustomAudioPlayer extends LitElement {
    [x: string]: unknown;
    static properties = {
        title: { type: String },
        src: { type: String },
    };

    static styles = css`
    .audio-player {
        display: flex;
        align-items: center;
        flex-grow: 2;

      }

      .song-title {
        font-size: 0.8rem;
      }
    `;

    render() {
        return html`
            <div>
                <span class="song-title">${this.title}</span>
                    <audio class="audio-player" src="${this.src}" controls />
            </div>
        `;
    }
}

customElements.get('custom-audio-player') || customElements.define('custom-audio-player', CustomAudioPlayer);
