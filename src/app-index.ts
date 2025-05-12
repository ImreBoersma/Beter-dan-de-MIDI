import { css, LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import './pages/app-home';

@customElement('app-index')
export class AppIndex extends LitElement {

static styles = css`
  * {
    font-family: Arial, sans-serif;
    background-color: #fffeee;
    margin: 0;
    padding: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    overflow-x: hidden;
  }`;

  render() {
    return html`<app-home />`
  }
}
