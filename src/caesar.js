// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    if (!shift || shift > 25 || !(shift > -25)) return false;
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    input = input.toLowerCase();
    const caesarArr = [];

    if (encode) {
      for (let char of input) {
        if (!alphabet.includes(char)) {
          caesarArr.push(char);
          continue;
        }

        const charIndex = alphabet.indexOf(char);

        if (charIndex + shift > 25)
          caesarArr.push(alphabet[charIndex + shift - 26]);

        if (charIndex + shift < 0)
          caesarArr.push(alphabet[26 + (charIndex + shift)]);
        else caesarArr.push(alphabet[charIndex + shift]);
      }
    }

    if (!encode) {
      for (let char of input) {
        if (!alphabet.includes(char)) {
          caesarArr.push(char);
          continue;
        }

        const charIndex = alphabet.indexOf(char);

        if (charIndex - shift > 25)
          caesarArr.push(alphabet[charIndex - shift - 26]);
        else if (charIndex - shift < 0)
          caesarArr.push(alphabet[26 + (charIndex - shift)]);
        else caesarArr.push(alphabet[charIndex - shift]);
      }
    }

    return caesarArr.join("");
  }

  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;
