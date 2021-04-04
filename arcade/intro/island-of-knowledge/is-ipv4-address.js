function isIPv4Address(inputString) {
  const inputArray = inputString.split('.');
  if (inputArray.length !== 4) {
    return false;
  }
  for (let i = 0; i < inputArray.length; i++) {
    const num = inputArray[i];
    if (!(num >= 0 && num <= 255) || (num[0] === '0' && num !== '0') || !num) {
      return false;
    }
  }
  return true;
}
