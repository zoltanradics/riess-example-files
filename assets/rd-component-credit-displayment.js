import { html, css, LitElement } from 'https://cdn.jsdelivr.net/gh/lit/dist@2.4.0/core/lit-core.min.js';

export class ComponentCreditDisplayment extends LitElement {
  static properties = {
    credit: { type: Number },
  };

  static styles = [
    css`
      :host {
        display: inline;
      }
    `,
  ];

  label(credit) {
    return `${credit} credit${credit === 1 ? '' : 's'}`;
  }

  render() {
    return html`${this.label(this.credit)}`;
  }
}
customElements.define('sh-credit-displayment', ComponentCreditDisplayment);
