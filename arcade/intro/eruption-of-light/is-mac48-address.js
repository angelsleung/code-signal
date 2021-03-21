function isMAC48Address(inputString) {
  if (inputString.length !== 17) {
    return false;
  }
  const acceptableChars = 'ABCDEF0123456789';
  for (let i = 0; i < inputString.length; i++) {
    if (i % 3 === 2) {
      if (inputString[i] !== '-') {
        return false;
      }
    } else {
      if (!acceptableChars.includes(inputString[i])) {
        return false;
      }
    }
  }
  return true;
}
