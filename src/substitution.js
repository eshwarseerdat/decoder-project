// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  function substitution(input, alphabet, encode = true) {
    // checks if an alphabet argument is given or has 26 characters
    if (!alphabet || !(alphabet.length === 26)) return false;

    // checks if alphabet has repeated characters
    for (let i = 0; i < alphabet.length; i++) {
      for (let j = i + 1; j < alphabet.length; j++) {
        if (alphabet[i] === alphabet[j]) return false;
      }
    }

    const standardAlphabet = "abcdefghijklmnopqrstuvwxyz";

    // make input lowercase
    input = input.toLowerCase();

    let codedStr = "";

    // loop thorugh input characters and add matching index position from standard alphabet to str or vice versa
    if (!encode) {
      for (let char of input) {
        codedStr +=
          alphabet.indexOf(char) === -1
            ? char
            : standardAlphabet[alphabet.indexOf(char)];
      }

      return codedStr;
    } else {
      for (let char of input) {
        codedStr +=
          standardAlphabet.indexOf(char) === -1
            ? char
            : alphabet[standardAlphabet.indexOf(char)];
      }

      return codedStr;
    }
  }

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
