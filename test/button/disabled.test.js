import "../../src/KucButton.js";
import { fixture, expect } from "@open-wc/testing";
import { html } from "lit-element";

describe("Kuc button disabled", () => {
  it("should be false when not passed in disabled attribute", async () => {
    const kucButton = await fixture(html`<kuc-button></kuc-button>`);
    const buttonElement = kucButton.shadowRoot.querySelector("button");

    expect(buttonElement.disabled).to.equal(false);
  });

  it("should be true when passed in disabled attribute", async () => {
    const kucButton = await fixture(html`<kuc-button disabled></kuc-button>`);
    const buttonElement = kucButton.shadowRoot.querySelector("button");

    expect(buttonElement.disabled).to.equal(true);
  });
});
