// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  const pairFinder = function (input, isSplit = true) {
    // create inputay to store sliced pair from input
    const pairs = [];

    // loop through input and slice off two charcaters from the beginning
    if (isSplit) {
      for (let str of input) {
        let start = 0;
        let stop = 2;
        while (stop <= str.length) {
          pairs.push(str.slice(start, stop));
          start += 2;
          stop += 2;
        }

        pairs.push(" ");
      }

      return pairs;
    }

    let start = 0;
    let stop = 2;
    while (stop <= input.length) {
      pairs.push(input.slice(start, stop));
      start += 2;
      stop += 2;
    }

    return pairs;
  };

  function polybius(input, encode = true) {
    if (!input) return false;

    // object array with digit:letter pair
    const polybiusPair = {
      11: "a",
      12: "f",
      13: "l",
      14: "q",
      15: "v",
      21: "b",
      22: "g",
      23: "m",
      24: "r",
      25: "w",
      31: "c",
      32: "h",
      33: "n",
      34: "s",
      35: "x",
      41: "d",
      42: "(i/j)",
      43: "o",
      44: "t",
      45: "y",
      51: "e",
      52: "k",
      53: "p",
      54: "u",
      55: "z",
    };

    // make input lowercase
    input = input.toLowerCase();

    if (!encode) {
      // splitting input on spaces if in input
      const inputSplit = input.includes(" ") ? input.split(" ") : null;

      if (!!inputSplit) {
        // check if there is an even amount of numbers in input
        const removedSpace = inputSplit.join("");
        if (!!(removedSpace.length % 2)) return false;

        // create array to store sliced pair from input
        const inputArr = pairFinder(inputSplit);

        const decodedStr = [];
        for (num of inputArr) {
          decodedStr.push(!!polybiusPair[num] ? polybiusPair[num] : " ");
        }

        return decodedStr.join("").trim();
      }

      if (input.length % 2) return false;

      const inputArr = pairFinder(input, false);
      const decodedStr = [];
      for (num of inputArr) {
        decodedStr.push(!!polybiusPair[num] ? polybiusPair[num] : " ");
      }

      return decodedStr.join("").trim();
    }

    let encodeStr = "";

    for (let char of input) {
      if (char === "i" || char === "j") encodeStr += 42;
      if (char === " ") encodeStr += char;
      for (let num in polybiusPair) {
        if (char === polybiusPair[num]) encodeStr += num;
      }
    }

    return encodeStr;
  }

  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;
