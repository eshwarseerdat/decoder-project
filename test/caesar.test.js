// Write your tests here!
const caesar = require("../src/caesar");
const { expect } = require("chai");

describe("caesar", () => {
  it("returns false if no shift value is given", () => {
    const actual = caesar("thinkful");
    expect(actual).to.be.false;
  });

  it("returns false if shift value is greater than 25", () => {
    const actual = caesar("thinkful", 26);
    expect(actual).to.be.false;
  });

  it("returns false if shift value is less than -25", () => {
    const actual = caesar("thinkful", -26);
    expect(actual).to.be.false;
  });

  it("ignores capital letters and handle shifts that goes past the end of the alphabet", () => {
    const expected = "wbyox jxdxwfkb";
    const actual = caesar("ZeBra MagaZine", -3);
    expect(actual).to.equal(expected);
  });

  it("maintain spaces and nonalphabetic symbols in message", () => {
    const actual = caesar("thinkful year 2021", -4);
    expect(actual).to.include(" 2021");
  });
});
