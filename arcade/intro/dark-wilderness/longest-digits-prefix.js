function longestDigitsPrefix(inputString) {
  let string = '';
  for (let i = 0; i < inputString.length; i++) {
    if (!isNaN(inputString[i]) && inputString[i] !== ' ') {
      string += inputString[i];
    } else {
      break;
    }
  }
  return string;
}
