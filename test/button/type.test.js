import "../../src/KucButton.js";
import { fixture, expect } from "@open-wc/testing";
import { html } from "lit-element";

describe("Kuc button type", () => {
  it("should be setted to success when not passed in type attribute", async () => {
    const kucButton = await fixture(html`<kuc-button></kuc-button>`);
    const buttonElement = kucButton.shadowRoot.querySelector("button");

    expect(buttonElement.type).to.equal("success");
  });

  it("should set to success when passed in type attribute invalid", async () => {
    const kucButton = await fixture(
      html`<kuc-button type="invalid-type"></kuc-button>`
    );
    const buttonElement = kucButton.shadowRoot.querySelector("button");

    expect(buttonElement.type).to.equal("success");
  });

  it("should overided when passed in type attribute valid", async () => {
    const kucButton = await fixture(
      html`<kuc-button type="warning"></kuc-button>`
    );
    const buttonElement = kucButton.shadowRoot.querySelector("button");

    expect(buttonElement.type).to.equal("warning");
  });
});
