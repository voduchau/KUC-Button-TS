import "../src/KucButton.js";
import { fixture, expect } from "@open-wc/testing";
import { html } from "lit-element";

describe("Kuc button onclick", () => {
  it("should be triggered when button clicked", async () => {
    const kucButton = await fixture(html`<kuc-button></kuc-button>`);
    const buttonElement = kucButton.shadowRoot.querySelector("button");

    let count = 0;
    buttonElement.onclick = () => {
      count = 1;
    };

    buttonElement.click();

    expect(count).to.equal(1);
  });

  it("should not be triggered when passed in disabled attribute", async () => {
    const kucButton = await fixture(html`<kuc-button disabled></kuc-button>`);
    const buttonElement = kucButton.shadowRoot.querySelector("button");

    let count = 0;
    buttonElement.onclick = () => {
      count = 1;
    };

    buttonElement.click();

    expect(count).to.equal(0);
  });
});
