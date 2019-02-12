import {LitElement, html, css} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';

class Card extends LitElement {
  static get properties() {
    return {
      stroke: {type: Boolean},
      header: {type: String},
      media: {type: String},
      subHeader: {type: String},
      buttons: {type: Array},
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
        display: flex;
        flex: 1;
        flex-direction: column;
      }
      .swc-card--stroked {
        border: 2px solid black;
      }
      .swc-card .swc-card-media {
        height: 200px;
        overflow: hidden;
      }
      .swc-card .swc-card-media img {
        object-fit: cover;
      }
    `;
  }
  
  constructor() {
    super();
    this.stroke = false;
    this.header = null;
    this.media = "https://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder.gif";
    this.subHeader = null;
    this.buttons = [];
  }

  render() {
    return html`
      <div class="swc-card ${classMap({'swc-card--stroked': this.stroke})}">
        ${this.header && html`
          <div class="swc-card-header">
            <h5>${this.header}</h5>
            ${this.subHeader && html`
              <p class="swc-card-sub-header">${this.subHeader}</p>
            `}
          </div>
        `}
        ${this.media && html`
          <div class="swc-card-media">
            <img src="${this.media}">
          </div>
        `}
        <div class="swc-card-body">
          <slot></slot>
        </div>
      </div>
    `;
  }
}

customElements.define('swc-card', Card);