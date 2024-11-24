import { html, css, LitElement } from 'https://cdn.jsdelivr.net/gh/lit/dist@2.4.0/core/lit-core.min.js';

export class AlertComponent extends LitElement {
  static properties = {
    label: { type: String },
    checked: { state: true },
  };

  static styles = css`
    :host {
      display: flex;
      gap: 2rem;
    }

    .checkbox-container {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .checkbox {
      display: block;
      width: 1.2rem;
      height: 1.2rem;
      border-radius: 4rem;
      border: 2px solid #c8c8c8;
    }

    .checkbox--selected {
    }

    input[type='checkbox'] {
      padding: 0.4rem;
      accent-color: darkblue;
    }

    .label {
      flex: 8;
    }
  `;

  handleChange(e) {
    this.checked = e.target.checked;
    this.dispatchEvent(new CustomEvent('change', { detail: { checked: this.checked } }));
  }

  render() {
    return html`
      <div class="checkbox-container">
        <input type="checkbox" .checked=${this.checked} @change=${this.handleChange} />
      </div>
      <div class="label">${this.label}</div>
    `;
  }
}

customElements.define('sh-checkbox', AlertComponent);
