import {LitElement, html} from 'lit-element';
import './components/button/swc-button.js';

class SwcApp extends LitElement {
  render() {
    return html`
      <swc-button label="Text Button"></swc-button>
      <swc-button label="Dense" dense={true}></swc-button>
      <swc-button label="Raised" raised={true}></swc-button>
      <swc-button label="Outlined" outlined={true}></swc-button>
    `;
  }
}

customElements.define('swc-app', SwcApp);