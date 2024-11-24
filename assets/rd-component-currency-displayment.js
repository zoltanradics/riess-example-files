import { html, css, LitElement } from 'https://cdn.jsdelivr.net/gh/lit/dist@2.4.0/core/lit-core.min.js';

export class ComponentCurrencyDisplayment extends LitElement {
  static properties = {
    amount: {
      type: Number,
    },
    symbol: {
      type: Number,
    },
  };

  static styles = [
    css`
      :host {
        display: inline;
      }
    `,
  ];

  render() {
    return html`${this.amount} ${this.symbol}`;
  }
}
customElements.define('sh-currency-displayment', ComponentCurrencyDisplayment);
