function reverseInParentheses(inputString) {
  const firstRight = inputString.indexOf(')');
  if (firstRight === -1) {
    return inputString;
  }
  let firstLeft = null;
  for (let i = firstRight - 1; i >= 0; i--) {
    if (inputString[i] === '(') {
      firstLeft = i;
      break;
    }
  }
  const stringToReverse = inputString.slice(firstLeft + 1, firstRight);
  const reversedString = reverseString(stringToReverse);
  const newString = inputString.slice(0, firstLeft) + reversedString + inputString.slice(firstRight + 1);
  return reverseInParentheses(newString);
}

function reverseString(string) {
  let resultString = '';
  for (let i = string.length - 1; i >= 0; i--) {
    resultString += string[i];
  }
  return resultString;
}
