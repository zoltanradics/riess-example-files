import { html, css, LitElement } from 'https://cdn.jsdelivr.net/gh/lit/dist@2.4.0/core/lit-core.min.js';

export class ComponentProductItem extends LitElement {
  static properties = {
    id: {
      attribute: 'id',
      type: Number,
    },
    title: {
      attribute: 'title',
      type: String,
    },
    subtitle: {
      attribute: 'subtitle',
      type: String,
    },
    tags: {
      attribute: 'taga',
      type: String,
    },
    description: {
      attribute: 'description',
      type: String,
    },
    quantity: {
      attribute: 'quantity',
      type: Number,
    },
    price: {
      attribute: 'price',
      type: Number,
    },
    credit: {
      attribute: 'credit',
      type: Number,
    },
    imageSrc: {
      attribute: 'image_src',
      type: String,
    },
    bigImageSrc: {
      attribute: 'big_image_src',
      type: String,
    },
    category: {
      attribute: 'category',
      type: String,
    },
    growingTemperature: {
      attribute: 'growing_temperature',
      type: String,
    },
    cultivationTime: {
      attribute: 'cultivation_time',
      type: String,
    },
    shelfLife: {
      attribute: 'shelf_life',
      type: String,
    },
    recommendedForFirstGrow: {
      attribute: 'recommended_for_first_grow',
      type: Boolean,
    },
    enableMetadata: {
      attribute: 'enable_metadata',
      type: Boolean,
    },
    enableDescription: {
      attribute: 'enable_description',
      type: Boolean,
    },
    enableMoreInformation: {
      attribute: 'enable_more_information',
      type: Boolean,
    },
    enableQuantitySelector: {
      attribute: 'enable_quantity_selector',
      type: Boolean,
    },
    enableMetadataOnTray: {
      attribute: 'enable_metadata_on_tray',
      type: Boolean,
    },
    enablePadding: {
      attribute: 'enable_padding',
      type: Boolean,
    },
    harvestation: {
      attribute: 'harvestation',
      type: String,
    },
    servingYield: {
      attribute: 'serving_yield',
      type: String,
    },
  };

  static styles = css`
    :host {
      display: block;
      width: 100%;
    }

    .main-image img {
      width: 100%;
      border-radius: 1.2rem;
      overflow: hidden;
    }

    .head {
      width: 100%;
      display: flex;
      box-sizing: border-box;
      gap: 1rem;
      margin-bottom: 1.8rem;
      box-sizing: border-box;
      background-color: #f5f5f5;
      border-radius: 1rem;
    }

    .head.head--with-padding {
      padding: 1rem;
    }

    .head:last-child {
      margin-bottom: 0;
    }

    .first-grow-label {
      display: inline;
      padding: 0.4rem 1rem;
      background-color: black;
      color: white;
      font-family: Poppins, 'sans-serif';
      font-size: 1rem;
      border-radius: 1rem;
    }

    .image {
      min-width: 10rem;
      border-radius: 1rem;
    }

    .image img {
      display: block;
      width: 10rem;
      height: 10rem;
      border: 1px solid #eaeaea;
      border-radius: 1rem;
      overflow: hidden;
    }

    .title {
      font-family: Poppins, 'sans-serif';
      font-weight: 600;
      font-size: 1.6rem;
      line-height: 2rem;
      margin: 0;
    }

    .yield {
      font-size: 1.2rem;
      color: #a4a4a4;
    }

    .details {
      width: 100%;
    }

    .details .top {
      margin-bottom: 0.5rem;
      min-height: 5.4rem;
    }

    .details .top .label {
      display: inline;
      padding: 0.2rem 0.8rem;
      background-color: black;
      border-radius: 0.8rem;
      font-size: 1.2rem;
      color: white;
    }

    .controls {
      display: flex;
      width: 100%;
      gap: 1rem;
    }

    .control.control--qty {
      flex: 1;
    }

    .control.control--more-information {
      width: 4rem;
      text-align: right;
    }

    .sh-product-item-description {
      margin-bottom: 2rem;
    }
  `;

  quantityChangeHandler(event) {
    this.quantity = event.detail.quantity;

    this.dispatchEvent(
      new CustomEvent(`sh-product-item:change`, {
        bubbles: true,
        composed: true,
        detail: {
          id: this.id,
          quantity: this.quantity,
          price: this.price,
          title: this.title,
          imageSrc: this.imageSrc,
        },
      })
    );
  }

  moreInformationButonClicked() {
    this.dispatchEvent(
      new CustomEvent(`sh-product-item:show-product-details`, {
        bubbles: true,
        composed: true,
        detail: {
          id: this.id,
          enableMetadata: this.enableMetadataOnTray,
        },
      })
    );
  }

  render() {
    return html`
      ${this.bigImageSrc
        ? html`<div class="main-image"><img src="${this.bigImageSrc}" alt="${this.title}" /></div>`
        : null}
      <div class="head ${this.enablePadding ? 'head--with-padding' : ''}">
        <div class="image">${this.imageSrc ? html`<img src="${this.imageSrc}" alt="${this.title}" />` : null}</div>
        <div class="details">
          <div class="top">
            <div class="subtitle">
              <div class="label">${this.subtitle}</div>
            </div>
            <div class="title">${this.title}</div>
            ${this.servingYield ? html`<div class="yield">Yields ${this.servingYield} servings / harvest</div>` : null}
            <div class="price">
              <sh-currency-displayment .amount=${this.price} .symbol=${'€'}></sh-currency-displayment> /
              <sh-credit-displayment .credit=${this.credit}></sh-credit-displayment>
            </div>
            <div class="labels"></div>
          </div>
          <div class="controls">
            <div class="control control--qty">
              ${this.enableQuantitySelector
                ? html`<sh-quantity-selector @change="${this.quantityChangeHandler}"></sh-quantity-selector>`
                : null}
            </div>
            <div class="control control--more-information">
              ${this.enableMoreInformation
                ? html`<sh-button-icon @click=${this.moreInformationButonClicked}></sh-button-icon>`
                : null}
            </div>
          </div>
        </div>
      </div>
      ${this.enableMetadata
        ? html`<sh-product-item-metadata
            class="sh-product-item-metadata"
            .harvestation=${this.harvestation}
            .cultivationTime=${this.cultivationTime}
            .growingTemperature=${this.growingTemperature}
            .shelfLife=${this.shelfLife}
          ></sh-product-item-metadata>`
        : null}
      ${this.enableDescription
        ? html`<sh-product-item-description
            class="sh-product-item-description"
            .description=${this.description}
            .expandable=${true}
          ></sh-product-item-description>`
        : null}
    `;
  }
}

customElements.define('sh-product-item', ComponentProductItem);
