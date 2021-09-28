import "../../src/KucButton.js";
import { fixture, expect } from "@open-wc/testing";
import { html } from "lit-element";

describe("Kuc button text", () => {
  it("should be null when not passed in text attribute", async () => {
    const kucButton = await fixture(html`<kuc-button></kuc-button>`);
    const buttonElement = kucButton.shadowRoot.querySelector("button");

    expect(buttonElement.innerText).to.equal("");
  });

  it("should be setted when passed in text attribute", async () => {
    const kucButton = await fixture(
      html`<kuc-button text="button"></kuc-button>`
    );
    const buttonElement = kucButton.shadowRoot.querySelector("button");

    expect(buttonElement.innerText).to.equal("button");
  });
});
