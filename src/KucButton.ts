import { LitElement, html, css } from "lit-element";
import { customElement, property } from "lit-element/decorators.js";

enum typeOfButtons {
  success,
  danger,
  warning,
}
@customElement("kuc-button")
export class KucButton extends LitElement {
  static override styles = css`
    .kuc-button {
      display: inline-block;
      font-weight: 400;
      text-align: center;
      white-space: nowrap;
      vertical-align: middle;
      border: 1px solid transparent;
      padding: 10px 20px;
      font-size: 16px;
      line-height: 1.5;
      border-radius: 5px;
      transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
        border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
      cursor: pointer;
    }
    .kuc-btn-success {
      color: #ffffff;
      background-color: #28a745;
      border-color: #28a745;
    }
    .kuc-btn-warning {
      color: #212529;
      background-color: #ffc107;
      border-color: #ffc107;
    }
    .kuc-btn-danger {
      color: #ffffff;
      background-color: #dc3545;
      border-color: #dc3545;
    }
    .kuc-button:disabled {
      opacity: 0.65;
      cursor: not-allowed;
    }
    .kuc-btn-success:hover:enabled {
      color: #ffffff;
      background-color: #25993f;
      border-color: #25993f;
    }
    .kuc-btn-warning:hover:enabled {
      color: #212529;
      background-color: #ebb207;
      border-color: #ebb207;
    }
    .kuc-btn-danger:hover:enabled {
      color: #ffffff;
      background-color: #c7303e;
      border-color: #c7303e;
    }
  `;

  @property({ type: String }) className = "";

  @property({ type: String }) id = "";

  @property({ type: String }) text = "";

  @property({ type: String }) type = "success";

  @property({ type: Boolean }) disabled = false;

  @property({ type: Function }) onclick = () => {};

  updated(changedProperties) {
    if (changedProperties.has("type")) {
      this.type = this.getValidTypeButton(this.type);
    }
  }

  override render() {
    return html`
      <button
        class="kuc-button kuc-btn-${this.type} ${this.className}"
        @click="${this.clickHandler}"
        ?id="${this.id}"
        type="button"
        ?disabled="${this.disabled}"
      >
        ${this.text}
      </button>
    `;
  }

  private clickHandler() {
    this.onclick;
  }

  private getValidTypeButton(type) {
    const isValidType = Object.values(typeOfButtons).includes(
      typeOfButtons[type]
    );
    return isValidType ? type : "success";
  }
}
