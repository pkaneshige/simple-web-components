import {LitElement, html, css} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';

class Card extends LitElement {
  static get properties() {
    return {
      stroke: {type: Boolean}
    };
  }

  static get styles() {
    return css`
      :host {
        display: inline-flex;
      }
      .swc-card {
        border-top-left-radius: inherit;
        border-top-right-radius: inherit;
        border-bottom-left-radius: inherit;
        border-bottom-right-radius: inherit;
        flex: 1;
      }
    `;
  }
  
  constructor() {
    super();
    this.stroke = false;
  }

  render() {
    return html`
      <div class="swc-card ${classMap({'swc-card--stroked': this.stroke})}">
        <slot></slot>
      </div>
    `;
  }
}

customElements.define('swc-card', Card);