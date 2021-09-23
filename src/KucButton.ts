import { LitElement, html, css } from "lit-element";
import { customElement, property } from "lit-element/decorators.js";

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

  @property({ type: String })
  className = "";

  @property({ type: String })
  id = "";

  @property({ type: String })
  text = "";

  @property({ type: String })
  type = "success";

  @property({ type: Boolean })
  disabled = false;

  @property({ type: Array })
  typeOfButtons = ["success", "warning", "danger"];

  @property({ type: Function })
  onclick = () => {};

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
}

declare global {
  interface HTMLElementTagNameMap {
    "my-element": KucButton;
  }
}
