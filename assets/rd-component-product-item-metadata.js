import { html, css, LitElement } from 'https://cdn.jsdelivr.net/gh/lit/dist@2.4.0/core/lit-core.min.js';

export class ComponentProductItemMetadata extends LitElement {
  static properties = {
    harvestation: { type: String },
    cultivationTime: { type: String },
    category: { type: String },
    growingTemperature: { type: String },
    shelfLife: { type: String },
  };

  static styles = css`
    :host {
      display: block;
      margin-bottom: 2.2rem;
    }

    .blocks {
      gap: 1rem;
      margin: 0 0.4rem;
    }

    .blocks .block {
      display: flex;
      background-color: white;
      border-radius: 0.6rem;
      padding: 0.4rem 0.8rem;
      margin-bottom: 0.8rem;
      color: black;
      text-align: center;
    }

    .blocks .block .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 2rem;
      height: 2rem;
      margin-right: 1rem;
    }

    .blocks .block .label {
      flex: 3;
      font-size: 1.2rem;
      text-align: left;
    }

    .blocks .block .value {
      flex: 2;
      font-size: 1.2rem;
      text-align: right;
    }
  `;

  render() {
    return html`
      <div class="blocks">
        <div class="block">
          <div class="icon">
            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9.99922 9.54101L7.59922 8.74101V5.39586M13.9992 7.94101C13.9992 4.40639 11.1338 1.54102 7.59922 1.54102C4.0646 1.54102 1.19922 4.40639 1.19922 7.94101C1.19922 11.4756 4.0646 14.341 7.59922 14.341C8.00937 14.341 8.41052 14.3024 8.79922 14.2287M10.3992 12.341L11.5992 13.541L14.7992 10.341"
                stroke="black"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div class="label">Number of harvests</div>
          <div class="value">${this.harvestation} times</div>
        </div>
        <div class="block">
          <div class="icon">
            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.1888 10.1737C10.5381 10.2901 10.9156 10.1014 11.0321 9.75208C11.1485 9.40278 10.9597 9.02524 10.6104 8.9088L10.1888 10.1737ZM7.99961 8.74126H7.33294C7.33294 9.02821 7.51656 9.28297 7.78879 9.37371L7.99961 8.74126ZM8.66628 5.3961C8.66628 5.02791 8.3678 4.72943 7.99961 4.72943C7.63142 4.72943 7.33294 5.02791 7.33294 5.3961H8.66628ZM10.6104 8.9088L8.21043 8.1088L7.78879 9.37371L10.1888 10.1737L10.6104 8.9088ZM8.66628 8.74126V5.3961H7.33294V8.74126H8.66628ZM13.7329 7.94126C13.7329 11.1077 11.166 13.6746 7.99961 13.6746V15.0079C11.9024 15.0079 15.0663 11.8441 15.0663 7.94126H13.7329ZM7.99961 13.6746C4.83318 13.6746 2.26628 11.1077 2.26628 7.94126H0.932943C0.932943 11.8441 4.0968 15.0079 7.99961 15.0079V13.6746ZM2.26628 7.94126C2.26628 4.77483 4.83318 2.20793 7.99961 2.20793V0.874593C4.0968 0.874593 0.932943 4.03845 0.932943 7.94126H2.26628ZM7.99961 2.20793C11.166 2.20793 13.7329 4.77483 13.7329 7.94126H15.0663C15.0663 4.03845 11.9024 0.874593 7.99961 0.874593V2.20793Z"
                fill="black"
              />
            </svg>
          </div>
          <div class="label">Cultivation Time</div>
          <div class="value">${this.cultivationTime} days</div>
        </div>
        <div class="block">
          <div class="icon">
            <svg width="8" height="15" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3.99922 11.5413H4.03672M6.79922 11.5413C6.79922 13.0877 5.54562 14.3413 3.99922 14.3413C2.45282 14.3413 1.19922 13.0877 1.19922 11.5413C1.19922 10.5898 1.67383 9.74911 2.39922 9.24314V3.14021C2.39922 2.25656 3.11556 1.54126 3.99922 1.54126C4.88287 1.54126 5.59922 2.2576 5.59922 3.14126V9.24314C6.17205 9.75583 6.79922 10.712 6.79922 11.5413Z"
                stroke="black"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div class="label">Growing Temperature</div>
          <div class="value">${this.growingTemperature} °C</div>
        </div>
        <div class="block">
          <div class="icon">
            <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2.08398 5.58691H12.584M3.44113 1.27441V2.39955M11.084 1.27441V2.39941M11.084 2.39941H3.58398C2.34134 2.39941 1.33398 3.40677 1.33398 4.64941V12.1495C1.33398 13.3921 2.34134 14.3995 3.58398 14.3995H11.084C12.3266 14.3995 13.334 13.3921 13.334 12.1495L13.334 4.64941C13.334 3.40677 12.3266 2.39941 11.084 2.39941ZM5.45898 10.0869L6.58398 11.2119L9.20898 8.58695"
                stroke="black"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div class="label">Shelf Life</div>
          <div class="value">${this.shelfLife} weeks</div>
        </div>
      </div>
    `;
  }
}

customElements.define('sh-product-item-metadata', ComponentProductItemMetadata);
