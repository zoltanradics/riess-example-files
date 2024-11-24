import { html, css, LitElement } from 'https://cdn.jsdelivr.net/gh/lit/dist@2.4.0/core/lit-core.min.js';

export class ButtonIcon extends LitElement {
  static styles = css`
    :host {
      display: inline;
    }

    .button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 4rem;
      height: 4rem;
      background-color: #003333;
      border-radius: 4rem;
      cursor: pointer;
    }

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 2.4rem;
      height: 2.2rem;
      font-size: 1.6rem;
      font-weight: 600;
      line-height: 0;
      border: 2px solid white;
      border-radius: 2.2rem;
      opacity: 0.8;
      color: white;
    }
  `;

  render() {
    return html`
      <button class="button">
        <div class="icon">i</div>
      </button>
    `;
  }
}

customElements.define('sh-button-icon', ButtonIcon);
