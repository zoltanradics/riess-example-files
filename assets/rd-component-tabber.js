import { html, css, LitElement } from 'https://cdn.jsdelivr.net/gh/lit/dist@2.4.0/core/lit-core.min.js';

export class Tabber extends LitElement {
  static properties = {
    active: { type: Number },
  };

  static styles = css`
    :host {
      display: block;
    }
  `;

  constructor() {
    super();
    this.active = 0;
  }

  connectedCallback() {
    super.connectedCallback();

    // Clean up active state
    this.cleanActiveState();

    // Highlight initial active tab
    this.setActiveTab(this.qty);

    // Set initial active content
    this.setActiveContent(this.qty);

    // Introduce event listeners on tabs
    this.addEventListenersToTabs();
  }

  setActiveTab(index) {
    this.querySelectorAll('.tab').item(index).classList.add('tab--active');
  }

  setActiveContent(index) {
    this.querySelectorAll('[slot="content"] > *').item(index).classList.remove('hidden');
  }

  addEventListenersToTabs() {
    this.querySelectorAll('.tab').forEach((element, index) => {
      element.addEventListener('click', (event) => this.activateTab(event, index));
    });
  }

  activateTab(event, index) {
    // Clean up active state
    this.cleanActiveState();

    // Get clicked element
    const eventTarget = event.target;

    // Highlight initial active tab
    this.setActiveTab(index);

    // Set active content
    this.setActiveContent(index);

    // Get mount target elemenet
    const mountElement = this.shadowRoot.querySelector(`slot[name=content]`);

    // Get target slot id
    const targetSlotId = eventTarget.getAttribute('content');
  }

  cleanActiveState() {
    this.querySelectorAll('.tab').forEach((element) => {
      element.classList.remove('tab--active');
    });

    this.querySelectorAll('[slot="content"] > *').forEach((element) => {
      element.classList.add('hidden');
    });
  }

  render() {
    return html`
      <slot name="tabs"></slot>
      <slot name="content"></slot>
    `;
  }
}

customElements.define('sh-tabber', Tabber);
