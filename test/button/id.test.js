import "../../src/KucButton.js";
import { fixture, expect } from "@open-wc/testing";
import { html } from "lit-element";

describe("Kuc button id", () => {
  it("should setted when property id passed in", async () => {
    const kucButton = await fixture(html`<kuc-button id="my-id"></kuc-button>`);
    const buttonElement = kucButton.shadowRoot.querySelector("button");

    expect(buttonElement.id).to.equal("my-id");
  });

  it("should remove id when property id dont passed in", async () => {
    const kucButton = await fixture(html`<kuc-button></kuc-button>`);
    const buttonElement = kucButton.shadowRoot.querySelector("button");

    expect(buttonElement.id).to.equal("");
  });
});
