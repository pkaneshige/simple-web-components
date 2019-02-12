import {LitElement, html, css} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';

class Section extends LitElement {
  static get properties() {
    return {
      header: {type: String},
      headerBackgroundColor: {type: String},
      headerTextColor: {type: String},
      footer: {type: String},
    }
  }
  static get styles() {
    return css`
      .swc-section {
        padding-top: 1rem;
        padding-bottom: 1rem;
      }
    `;
  }
  constructor() {
    super();
    this.header = null;
    this.footer = null;
  }
  render() {
    return html`
      <section class="swc-section">
        ${this.header && html`
          <div class="section-header">
            <h4>${this.header}</h4>
          </div>
        `}
        <div class="section-body">
          <slot></slot>
        </div>
        ${this.footer && html`
          <div class="section-footer">${this.footer}</div>
        `}
      </section>
    `;
  }
}

customElements.define('swc-section', Section);