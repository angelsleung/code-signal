function firstDigit(inputString) {
  for (let i = 0; i < inputString.length; i++) {
    if (!isNaN(inputString[i]) && inputString[i] !== ' ') {
      return inputString[i];
    }
  }
}
