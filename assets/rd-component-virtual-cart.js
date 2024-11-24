import { html, css, LitElement } from 'https://cdn.jsdelivr.net/gh/lit/dist@2.4.0/core/lit-core.min.js';

export class ComponentVirtualCartSummary extends LitElement {
  static properties = {
    cart: { state: true },
    handleShelfLifeConfirmed: { state: true },
    shippingFee: {
      attribute: 'shipping-fee',
      type: String,
    },
  };

  static styles = css`
    :host {
      display: block;
      width: 100%;
    }

    .lines {
      margin-bottom: 1rem;
    }

    .line {
      display: block;
      margin-bottom: 2rem;
    }

    .line:last-child {
      margin-bottom: 0;
    }

    .shipping {
      display: flex;
      width: 100%;
    }

    .limited-shelf-life {
      margin-bottom: 2rem;
    }

    .col--left {
      flex: 3;
    }

    .col--right {
      flex: 1;
      text-align: right;
    }

    .price,
    .title {
      font-size: 1.4rem;
      font-weight: 600;
    }

    .total {
      margin-bottom: 1rem;
    }

    .alert {
      margin-bottom: 2rem;
    }
  `;

  constructor() {
    super();
    this.cart = window.podClaimingCart.cart;
    this.productData = [];
    this.numberOfStandarPodsInCart = 0;
  }

  connectedCallback() {
    super.connectedCallback();

    window.addEventListener('pods:cart-updated', (event) => {
      this.cart = event.detail;
      this.numberOfStandarPodsInCart = this.getNumberOfStandarPodsInCart();
    });

    const productDataJSON = window.document.getElementById('pods-product-data').innerText;
    this.productData = JSON.parse(productDataJSON).reduce((acc, item) => ({ ...acc, [item.id]: item }), {});
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    window.removeEventListener('pods:cart-updated');
  }

  /**
   *
   * Calcjulate the number of standard pod in the cart
   *
   * @property {Cart} cart
   * @returns {Number}
   */
  getNumberOfStandarPodsInCart() {
    return this.cart.items.reduce((acc, item) => {
      return this.productData[item.id].tags.includes('growingpod') ? acc + item.quantity : acc;
    }, 0);
  }

  /**
   *
   * Decide id shelf life confirmation should show up
   *
   * @property {number} itemCount
   * @returns {boolean}
   */
  showShelfLifeAlert() {
    return this.cart.itemCount > 2;
  }

  handleCheckoutButtonClick() {
    window.location.href = window.podClaimingCart.getCartPermalink();
  }

  /**
   *
   * Disable checkout button if there are more then X item on the cart
   * and limited shelf life confirmation is opted-in
   *
   * @property {Cart} cart
   * @property {Boolean} handleShelfLifeConfirmed
   *
   * @returns {Boolean}
   */
  disableCheckoutButton() {
    return this.numberOfStandarPodsInCart > 2;
  }

  render() {
    if (this.cart.itemCount === 0) {
      return html`<sh-alert label="Your pods cart is empty."></sh-alert>`;
    }

    return html`
      <div class="lines">
        ${this.cart.items.map(
          (item) =>
            html`<sh-virtual-cart-line
              class="line"
              .imageSrc=${item.imageSrc}
              .price=${item.price}
              .title=${item.title}
              .quantity=${item.quantity}
            >
            </sh-virtual-cart-line>`
        )}
      </div>

      ${this.showShelfLifeAlert()
        ? html`<div class="limited-shelf-life">
            <div class="alert">
              <sh-alert color="success" label="${window.podClaimingStrings.limitedShelfLifeMessage}"></sh-alert>
            </div>
          </div>`
        : null}
      ${this.shippingFee
        ? html`<div class="shipping">
            <div class="col col--left">
              <div class="title">Shipping Fee</div>
            </div>
            <div class="col col--right">
              <div class="price">${this.shippingFee} €</div>
            </div>
          </div>`
        : null}
      <div class="shipping">
        <sh-virtual-cart-total-line
          .label=${'Estimated shipping fee'}
          .price=${this.cart.shippingFee}
        ></sh-virtual-cart-total-line>
      </div>
      <div class="total">
        <sh-virtual-cart-total-line
          label="Total"
          .price=${this.cart.totalPrice}
          .credit=${this.cart.itemCount}
          .shippingFee=${this.cart.shippingFee}
        ></sh-virtual-cart-total-line>
      </div>
      <div class="go-to-checkout">
        <sh-button
          label="Go to checkout"
          .disabled=${this.disableCheckoutButton()}
          @click=${this.handleCheckoutButtonClick}
        ></sh-button>
      </div>
    `;
  }
}

customElements.define('sh-virtual-cart-summary', ComponentVirtualCartSummary);
