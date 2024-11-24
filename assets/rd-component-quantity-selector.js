import { html, css, LitElement } from 'https://cdn.jsdelivr.net/gh/lit/dist@2.4.0/core/lit-core.min.js';

export class QuantitySelector extends LitElement {
  static properties = {
    qty: { type: Number },
  };

  static styles = css`
    :host {
      display: flex;
      max-width: 20rem;
      height: 4rem;
      border: 1px solid white;
      border-radius: 2rem;
    }

    .button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      background-color: white;
      border: none;
      color: black;
      font-size: 2.2rem;
      cursor: pointer;
    }

    .button--remove {
      border-top-left-radius: 2rem;
      border-bottom-left-radius: 2rem;
    }

    .button--add {
      border-top-right-radius: 2rem;
      border-bottom-right-radius: 2rem;
    }

    .label {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      padding: 0 1rem;
      font-weight: bold;
    }
  `;

  constructor() {
    super();
    this.qty = 0;
    this.min = 0;
  }

  incr() {
    this.qty = this.qty + 1;
    this.dispatchQuantityChange();
  }

  decr() {
    if (this.qty < 1) {
      return;
    }

    this.qty = this.qty - 1;
    this.dispatchQuantityChange();
  }

  dispatchQuantityChange() {
    this.dispatchEvent(
      new CustomEvent(`change`, {
        bubbles: true,
        composed: true,
        detail: {
          quantity: this.qty,
        },
      })
    );
  }

  render() {
    return html`
      <button class="button button--remove" @click="${this.decr}">-</button>
      <div class="label label--qty">${this.qty}</div>
      <button class="button button--add" @click="${this.incr}">+</button>
    `;
  }
}

customElements.define('sh-quantity-selector', QuantitySelector);
