import {LitElement, html} from 'lit-element';
import './components/section/swc-section.js';
import './components/button/swc-button.js';
import './components/card/swc-card.js';

class SwcApp extends LitElement {
  render() {
    return html`
      <swc-section header="Buttons">
        <swc-button label="Button"></swc-button>
        <swc-button label="Dense" dense={true}></swc-button>
        <swc-button label="Raised" raised={true}></swc-button>
        <swc-button label="Outlined" outlined={true}></swc-button>
      </swc-section>
      <swc-section header="Cards">
        <swc-card header="Regular Card"><p>Regular card body content.</p></swc-card>
        <swc-card header="Stroked Card" stroke={true}><p>Stroked card body content.</p></swc-card>
      </swc-section>
    `;
  }
}

customElements.define('swc-app', SwcApp);