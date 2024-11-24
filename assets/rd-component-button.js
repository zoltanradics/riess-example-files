import { html, css, LitElement } from 'https://cdn.jsdelivr.net/gh/lit/dist@2.4.0/core/lit-core.min.js';

export class Button extends LitElement {
  static properties = {
    label: { type: String },
    href: { type: String },
    disabled: { type: Boolean },
  };

  static styles = css`
    :host {
      display: block;
      width: 100%;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 4.2rem;
      border-radius: 4.2rem;
      background-color: #003333;
      color: white;
      text-align: center;
      text-decoration: none;
      font-size: 1.8rem;
      cursor: pointer;
    }

    button:disabled {
      opacity: 0.6;
    }
  `;

  handleClick() {
    if (this.href) {
      window.location.href = this.href;
    }
  }

  render() {
    return html`<button .disabled=${this.disabled} @click=${this.handleClick}>${this.label}</button>`;
  }
}

customElements.define('sh-button', Button);
