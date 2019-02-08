import {LitElement, html, css} from 'lit-element';

class Button extends LitElement {
  static get properties() {
    return {
      raised: {type: Boolean},
      unelevated: {type: Boolean},
      outlined: {type: Boolean},
      dense: {type: Boolean},
      disabled: {type: Boolean},
      icon: {type: String},
      label: {type: String}
    }
  }
  constructor() {
    super();
    this.raised = false;
    this.unelevated = true;
    this.outlined = false;
    this.dense = false;
    this.disabled = false;
    this.icon = '';
    this.label = '';
  }
  render() {
    return html`
      <button>
        ${this.label}
      </button>
    `;
  }
}

customElements.define('swc-button', Button);