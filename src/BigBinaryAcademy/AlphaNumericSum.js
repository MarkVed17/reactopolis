const findSumOfDigits = alphaNumeric => {
    const characters = alphaNumeric.split("");
    return characters
      .filter(ch => isNaN(ch) == false)
      .map(Number)
      .reduce((sum, digit) => sum + digit, false);
  };

const alphaNumeric = '0987654321abcdefgh';

console.log(findSumOfDigits(alphaNumeric))