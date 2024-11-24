import { html, css, LitElement } from 'https://cdn.jsdelivr.net/gh/lit/dist@2.4.0/core/lit-core.min.js';

export class AlertComponent extends LitElement {
  static properties = {
    label: { type: String },
    icon: { type: String },
    color: { type: String },
  };

  static styles = css`
    :host {
      display: block;
      width: 100%;
      min-height: 4.8rem;
      padding: 1rem 2rem;
      box-sizing: border-box;
      border-radius: 1rem;
      background-color: #f7f2ee;
      font-size: 1.4rem;
    }

    :host([color='info']) {
      background-color: #eff6ff;
      color: #1d4ed8;
    }

    :host([color='success']) {
      background-color: #dcf9ce;
      border: 1px solid#48be1f;
      color: #48be1f;
    }

    :host([color='danger']) {
      background-color: #ffe1dd;
      border: 1px solid #e11900;
      color: #e11900;
      font-weight: 600;
    }

    .col {
      display: inline;
    }

    .col--icon {
      font-size: 1.8rem;
      margin-right: 1.8rem;
    }
  `;

  render() {
    return html`
      ${typeof this.icon === 'undefined' ? `` : html`<div class="col col--icon">${this.icon}</div>`}
      <div class="col col--label">${this.label}</div>
    `;
  }
}

customElements.define('sh-alert', AlertComponent);
