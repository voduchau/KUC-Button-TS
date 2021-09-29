import "../src/KucButton.js";
import { fixture, expect } from "@open-wc/testing";
import { html } from "lit-element";

describe("Kuc button onclick", () => {
  it("should be triggered when button clicked", async () => {
    const kucButton = await fixture(html`<kuc-button></kuc-button>`);
    const buttonElement = kucButton.shadowRoot.querySelector("button");

    kucButton.addEventListener("click", function (e) {
      buttonElement.innerText = e.type;
    });

    buttonElement.click();

    expect(buttonElement.innerText).to.equal("click");
  });

  it("should not be triggered when passed in disabled attribute", async () => {
    const kucButton = await fixture(html`<kuc-button disabled></kuc-button>`);
    const buttonElement = kucButton.shadowRoot.querySelector("button");

    kucButton.addEventListener("click", function (e) {
      buttonElement.innerText = e.type;
    });

    buttonElement.click();

    expect(buttonElement.innerText).to.equal("");
  });
});
