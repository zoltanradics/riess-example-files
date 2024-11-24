import { html, css, LitElement } from 'https://cdn.jsdelivr.net/gh/lit/dist@2.4.0/core/lit-core.min.js';

export class ComponentVirtualCartLine extends LitElement {
  static properties = {
    imageSrc: { type: String },
    title: { type: String },
    quantity: { type: Number },
    price: { type: Number },
  };

  static styles = [
    css`
      :host {
        display: block;
        padding-bottom: 1rem;
        border-bottom: 1px solid #e3e3e3;
      }

      .line {
        display: flex;
        width: 100%;
        margin-bottom: 1rem;
      }

      .line:last-child {
        margin-bottom: 0;
      }

      .price,
      .title {
        font-size: 1.8rem;
        font-weight: 600;
      }

      .col {
        width: 100%;
      }

      .col--left {
        flex: 3;
        display: flex;
        width: 100%;
      }

      .col--right {
        flex: 1;
        text-align: right;
      }

      .image {
        width: 4rem;
        height: 4rem;
        margin-right: 1rem;
        border-radius: 1rem;
        background-color: #f7f2ee;
        overflow: hidden;
        border: 5px solid red;
      }

      .image img {
        width: 100%;
      }

      .title {
        margin: 0;
        font-family: Poppins, 'sans-serif';
        font-weight: 600;
      }
    `,
  ];

  render() {
    return html`
      <div class="line">
        <div class="col col--left">
          <!-- <div class="image">${this.imageSrc
            ? html` <img src="${this.imageSrc}" alt="${this.title}" /> `
            : null}</div> -->
          <div class="title">
            <span>${this.quantity + ' x '}</span>
            <span>${this.title}</span>
          </div>
        </div>
        <div class="col col--right">
          <div class="price">
            <sh-currency-displayment .amount=${this.quantity * this.price} .symbol=${'€'}></sh-currency-displayment>
          </div>
          <div class="credit">
            <span>or</span>
            <sh-credit-displayment .credit=${this.quantity}></sh-credit-displayment>
          </div>
        </div>
      </div>
      <slot></slot>
    `;
  }
}

customElements.define('sh-virtual-cart-line', ComponentVirtualCartLine);
