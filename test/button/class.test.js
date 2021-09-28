import "../../src/KucButton.js";
import { fixture, expect } from "@open-wc/testing";
import { html } from "lit-element";

describe("Kuc button class", () => {
  it("should add new when passed in className attribute", async () => {
    const kucButton = await fixture(
      html`<kuc-button className="my-class"></kuc-button>`
    );

    expect(kucButton.className).to.equal("my-class");
  });
});
