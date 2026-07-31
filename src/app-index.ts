import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

import './pages/app-home';

@customElement('app-index')
export class AppIndex extends LitElement {
  static styles = css`
  * {
    font-family: Arial, sans-serif;
  }

  html, body {
    margin: 0;
    padding: 0;
    overflow: hidden;
    height: 100%;
  }`;

  render() {
    return html`<app-home />`;
  }
}
