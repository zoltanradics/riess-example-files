import { html, css, LitElement } from 'https://cdn.jsdelivr.net/gh/lit/dist@2.4.0/core/lit-core.min.js';

export class ComponentVirtualCartTotalLine extends LitElement {
  static properties = {
    label: { type: String },
    price: { type: Number },
    credit: { type: Number },
    shippingFee: { type: Number },
  };

  static styles = [
    css`
      :host {
        display: flex;
        width: 100%;
        height: 8rem;
        border-bottom: 1px solid #e3e3e3;
        padding-bottom: 2rem;
      }

      .col--left {
        flex: 3;
        display: flex;
        width: 100%;
      }

      .col--right {
        flex: 2;
        text-align: right;
      }

      .price,
      .title {
        margin: 0;
        font-size: 1.8rem;
        font-weight: 600;
      }
    `,
  ];

  render() {
    return html`
      <div class="col col--left">
        <div class="title">${this.label}</div>
      </div>
      <div class="col col--right">
        <div class="price">
          <sh-currency-displayment .amount=${this.price} .symbol=${'€'}></sh-currency-displayment>
        </div>
        ${this.credit
          ? html`
              <div class="credit">
                <span>or</span>
                <sh-credit-displayment .credit=${this.credit}></sh-credit-displayment>
                <br />+ <sh-currency-displayment .amount=${this.shippingFee} .symbol=${'€'}></sh-currency-displayment>
              </div>
            `
          : null}
      </div>
    `;
  }
}

customElements.define('sh-virtual-cart-total-line', ComponentVirtualCartTotalLine);
