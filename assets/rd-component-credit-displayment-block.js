import { html, css, LitElement } from 'https://cdn.jsdelivr.net/gh/lit/dist@2.4.0/core/lit-core.min.js';

export class ComponentCreditDisplayment extends LitElement {
  static properties = {
    credit: { type: String },
    label: { type: String },
    postfix: { type: String },
  };

  static styles = [
    css`
      :host {
        display: block;
        padding: 2rem 2rem;
        box-sizing: border-box;
        border-radius: 1rem;
        text-align: center;
        white-space: nowrap;
        font-size: 1.6rem;
        line-height: 2rem;
        background-color: #f5f5f5;
      }

      .postfix {
        font-size: 1.2rem;
      }
    `,
  ];

  render() {
    return html`
      <div class="credit">
        <span>${this.credit}</span>
        <span>${this.label}</span>
      </div>
      <div class="postfix">${this.postfix}</div>
    `;
  }
}

customElements.define('sh-credit-displayment-block', ComponentCreditDisplayment);
