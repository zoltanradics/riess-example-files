import { html, css, LitElement } from 'https://cdn.jsdelivr.net/gh/lit/dist@2.4.0/core/lit-core.min.js';

export class ComponentFreePodCounter extends LitElement {
  static get properties() {
    return {
      label: {
        type: String,
      },
      numberOfFreePods: {
        attribute: 'number-of-free-pods',
        type: Number,
      },
      numberOfTotalSelectedPods: {
        attribute: 'number-of-total-selected-pods',
        type: Number,
      },
    };
  }

  static styles = [
    css`
      :host {
        display: block;
      }

      .pod-availability {
        width: 100%;
        margin-bottom: 1rem;
      }

      .pod-availability--standard {
        background-color: #dcf9ce;
      }
    `,
  ];

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    // Define variable to display values
    const numberOfTotalSelectedPods = this.numberOfTotalSelectedPods > 1 ? 1 : this.numberOfTotalSelectedPods;

    return html`
      <sh-credit-displayment-block
        class="pod-availability pod-availability--standard"
        .credit=${`${numberOfTotalSelectedPods} / ${this.numberOfFreePods}`}
        .label=${this.label}
      ></sh-credit-displayment-block>
      ${this.numberOfTotalSelectedPods > this.numberOfFreePods
        ? html`<sh-alert color="info" label="You can also add extra Pods to your cart for just 19€ each."></sh-alert>`
        : null}
    `;
  }
}

customElements.define('sh-free-pod-counter', ComponentFreePodCounter);
