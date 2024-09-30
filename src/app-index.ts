import { css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

import './pages/app-home';
import './styles/global.css';
import { router } from './router';

@customElement('app-index')
export class AppIndex extends LitElement {
  
  static styles = css`
  html {
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
    overflow-y: scroll;
    overflow-x: hidden;
    height: 100lvh;
  }`;

  firstUpdated() {
    router.addEventListener('route-changed', () => {
      (document as any).startViewTransition?.(() => this.requestUpdate()) ?? this.requestUpdate();
    });
  }

  render() {
    return router.render();
  }
}
