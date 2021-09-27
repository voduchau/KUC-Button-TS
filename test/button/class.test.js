import "../../src/KucButton.js";
import { fixture, expect } from "@open-wc/testing";
import { html } from "lit-element";

describe("Kuc button class", () => {
  it("should add new when property className passed in", async () => {
    const kucButton = await fixture(
      html`<kuc-button className="my-class"></kuc-button>`
    );
    const buttonElement = kucButton.shadowRoot.querySelector("button");

    expect(buttonElement).to.have.class("my-class");
  });
});
