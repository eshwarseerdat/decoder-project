// Write your tests here!
const { expect } = require("chai");
const polybius = require("../src/polybius");

describe("polybius", () => {
  it("capital letters are ignored", () => {
    const actual = polybius("Hello world");
    const expected = "3251131343 2543241341";
    expect(actual).to.equal(expected);
  });

  it("spaces are maintained throughout", () => {
    const actual = polybius("3251131343 2543241341", false);
    const expected = "hello world";
    expect(actual).to.equal(expected);
  });

  it("translate i and j to 42 when encoding", () => {
    const expected = "4242";
    const actual = polybius("ij");
    expect(actual).to.equal(expected);
  });

  it("translate 42 to (i/j) when decoding", () => {
    const expected = "(i/j)";
    const actual = polybius("42", false);
    expect(actual).to.equal(expected);
  });
});
