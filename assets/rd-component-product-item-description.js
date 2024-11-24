import { html, css, LitElement } from 'https://cdn.jsdelivr.net/gh/lit/dist@2.4.0/core/lit-core.min.js';

export class ComponentProductItemDescription extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .description {
      font-size: 1.4rem;
      color: #a4a4a4;
    }
  `;

  render() {
    return html`<div class="description">${this.description}</div>`;
  }
}

customElements.define('sh-product-item-description', ComponentProductItemDescription);
