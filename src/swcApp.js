import {LitElement, html, css} from 'lit-element';
import './components/button/swc-button.js';

class SwcApp extends LitElement {
  render() {
    return html`
      <swc-button label="SWC Button"></swc-button>
    `;
  }
}

customElements.define('swc-app', SwcApp);