var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from "lit-element";
import { customElement, property } from "lit-element/decorators.js";
let KucButton = class KucButton extends LitElement {
    constructor() {
        super(...arguments);
        this.className = "";
        this.id = "";
        this.text = "";
        this.type = "success";
        this.disabled = false;
        this.typeOfButtons = ["success", "warning", "danger"];
        this.onclick = () => { };
    }
    render() {
        return html `
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
    clickHandler() {
        this.onclick;
    }
};
KucButton.styles = css `
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
    .kuc-button:disabled {
      opacity: 0.65;
      cursor: not-allowed;
    }
    .kuc-btn-warning {
      color: #212529;
      background-color: #ffc107;
      border-color: #ffc107;
    }
    .kuc-btn-warning:hover:enabled {
      color: #ffffff;
      background-color: #ebb207;
      border-color: #ebb207;
    }
    .kuc-btn-danger {
      color: #fff;
      background-color: #dc3545;
      border-color: #dc3545;
    }
    .kuc-btn-danger:hover:enabled {
      color: #ffffff;
      background-color: #c7303e;
      border-color: #c7303e;
    }
    .kuc-btn-success {
      color: #ffffff;
      background-color: #28a745;
      border-color: #28a745;
    }
    .kuc-btn-success:hover:enabled {
      color: #ffffff;
      background-color: #25993f;
      border-color: #25993f;
    }
  `;
__decorate([
    property({ type: String })
], KucButton.prototype, "className", void 0);
__decorate([
    property({ type: String })
], KucButton.prototype, "id", void 0);
__decorate([
    property({ type: String })
], KucButton.prototype, "text", void 0);
__decorate([
    property({ type: String })
], KucButton.prototype, "type", void 0);
__decorate([
    property({ type: Boolean })
], KucButton.prototype, "disabled", void 0);
__decorate([
    property({ type: Array })
], KucButton.prototype, "typeOfButtons", void 0);
__decorate([
    property({ type: Function })
], KucButton.prototype, "onclick", void 0);
KucButton = __decorate([
    customElement("kuc-button")
], KucButton);
export { KucButton };
//# sourceMappingURL=KucButton.js.map