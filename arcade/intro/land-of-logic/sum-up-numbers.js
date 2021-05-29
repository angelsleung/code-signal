function sumUpNumbers(inputString) {
  let sum = 0;
  let currentNumString = '';
  for (let i = 0; i < inputString.length; i++) {
    if (parseInt(inputString[i]) >= 0) {
      currentNumString += inputString[i];
    } else {
      if (currentNumString.length > 0) {
        sum += parseInt(currentNumString);
        currentNumString = '';
      }
    }
  }
  if (currentNumString.length > 0) {
    sum += parseInt(currentNumString);
  }
  return sum;
}
