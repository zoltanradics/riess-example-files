import { html, css, LitElement } from 'https://cdn.jsdelivr.net/gh/lit/dist@2.4.0/core/lit-core.min.js';

export class Tray extends LitElement {
  static properties = {
    open: {
      type: Boolean,
    },
  };

  static styles = css`
    :host {
      display: block;
    }

    .overlay {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 1000;
      display: block;
      width: 100vw;
      height: 100vh;
      background-color: rgba(0, 0, 0, 0.5);
    }

    .tray {
      position: absolute;
      bottom: 0;
      width: 100%;
      min-height: 40rem;
      padding: 1.6rem;
      box-sizing: border-box;
      background-color: #f5f5f5;
      border-radius: 2rem;
      animation: var(--animation-slide-in);
    }

    .overlay {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .tray {
      position: relative;
      width: 36.6rem;
    }

    .tray__head {
      display: flex;
      justify-content: end;
      align-items: right;
      margin-bottom: 0.6rem;
    }

    .close {
      width: 3rem;
      height: 3rem;
      padding: 0;
      border: none;
      cursor: pointer;
    }
  `;

  hide() {
    this.open = false;
  }

  getTrayTemplate() {
    return html`
      <div class="overlay">
        <div class="tray">
          <div class="tray__head">
            <button class="close" @click=${this.hide}>
              <svg
                style="width: 3rem; height: 3rem;"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.979 10.435C18.3696 10.0445 18.3696 9.41134 17.979 9.02082C17.5885 8.63029 16.9554 8.63029 16.5648 9.02082L17.979 10.435ZM8.07955 17.5061C7.68902 17.8966 7.68902 18.5298 8.07955 18.9203C8.47007 19.3108 9.10324 19.3108 9.49376 18.9203L8.07955 17.5061ZM16.5648 18.9203C16.9554 19.3108 17.5885 19.3108 17.979 18.9203C18.3696 18.5298 18.3696 17.8966 17.979 17.5061L16.5648 18.9203ZM9.49376 9.02082C9.10324 8.63029 8.47007 8.63029 8.07955 9.02082C7.68902 9.41134 7.68903 10.0445 8.07955 10.435L9.49376 9.02082ZM20.8075 21.7487C16.5117 26.0445 9.54689 26.0445 5.25112 21.7487L3.83691 23.163C8.91373 28.2398 17.1449 28.2398 22.2217 23.163L20.8075 21.7487ZM5.25112 21.7487C0.955355 17.453 0.955354 10.4882 5.25112 6.19239L3.83691 4.77817C-1.23991 9.85499 -1.23991 18.0861 3.83691 23.163L5.25112 21.7487ZM5.25112 6.19239C9.54689 1.89662 16.5117 1.89662 20.8075 6.19239L22.2217 4.77817C17.1449 -0.298642 8.91372 -0.298642 3.83691 4.77817L5.25112 6.19239ZM20.8075 6.19239C25.1032 10.4882 25.1032 17.453 20.8075 21.7487L22.2217 23.163C27.2985 18.0861 27.2985 9.85499 22.2217 4.77817L20.8075 6.19239ZM16.5648 9.02082L12.3222 13.2635L13.7364 14.6777L17.979 10.435L16.5648 9.02082ZM12.3222 13.2635L8.07955 17.5061L9.49376 18.9203L13.7364 14.6777L12.3222 13.2635ZM17.979 17.5061L13.7364 13.2635L12.3222 14.6777L16.5648 18.9203L17.979 17.5061ZM13.7364 13.2635L9.49376 9.02082L8.07955 10.435L12.3222 14.6777L13.7364 13.2635Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>
          <div class="tray-inner">
            <slot></slot>
          </div>
        </div>
      </div>
    `;
  }

  render() {
    return this.open ? this.getTrayTemplate() : null;
  }
}

customElements.define('sh-tray', Tray);
