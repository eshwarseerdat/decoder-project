// Write your tests here!
const { expect } = require("chai");
const substitution = require("../src/substitution");

describe("substitution", () => {
  it("returns false if alphabet argument not equal to 26 characters", () => {
    const actual = substitution("message", "abc");
    expect(actual).to.be.false;
  });

  it("Ignores capital letters and correctly translate given phrase", () => {
    const actual = substitution("MY message", "$wae&zrdxtfcygvuhbijnokmpl");
    expect(actual).to.be.equal("yp y&ii$r&");
  });

  it("returns false if alphabet does not have unique characters", () => {
    const actual = substitution("message", "abcabcdabcdefgasdlkfhjkyuz");
    expect(actual).to.be.false;
  });

  it("spaces are maintained", () => {
    const actual = substitution(
      "yp y&ii$r&",
      "$wae&zrdxtfcygvuhbijnokmpl",
      false
    );
    expect(actual).to.be.equal("my message");
  });
});
