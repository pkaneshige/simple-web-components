import {LitElement, html, css} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';

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

  static get styles() {
    return css`
      :host {
        display: inline-flex;
      }
      .swc-button {
        -webkit-appearance: none;
        -webkit-font-smoothing: antialiased;
        border: none;
        border-radius: 4px;
        display: inline-flex;
        flex: 1;
        font-family: Helvetica, sans-serif;
        font-size: .875rem;
        font-weight: 500;
        height: 36px;
        line-height: inherit;
        min-width: 64px;
        text-decoration: none;
        text-transform: uppercase;
        outline: none;
        overflow: hidden;
        padding: 0 8px;
        position: relative;
        user-select: none;
        vertical-align: middle;
      }
      .swc-button--dense {
        height: 32px;
        font-size: .8125rem;
      }
      .swc-button--raised {
        box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
        transition: box-shadow .28s cubic-bezier(.4,0,.2,1),-webkit-box-shadow .28s cubic-bezier(.4,0,.2,1);
      }
      .swc-button--outlined {
        border-style: solid;
        border-width: 2px;
        padding: 0 14px;
      }
      .swc-button--raised,
      .swc-button--unelevated {
        padding: 0 16px;
      }
    `;
  }

  constructor() {
    super();
    this.raised = false;
    this.unelevated = false;
    this.outlined = false;
    this.dense = false;
    this.disabled = false;
    this.icon = '';
    this.label = '';
  }

  render() {
    const classes = {
      'swc-button--raised': this.raised,
      'swc-button--unelevated': this.unelevated,
      'swc-button--outlined': this.outlined,
      'swc-button--dense': this.dense,
    };
    return html`
      <button
        class="swc-button ${classMap(classes)}"
        ?disabled="${this.disabled}"
        aria-label="${this.label || this.icon}">
        ${this.label}
      </button>
    `;
  }
}

customElements.define('swc-button', Button);