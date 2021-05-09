function palindromeRearranging(inputString) {
  const charCount = {};
  for (let i = 0; i < inputString.length; i++) {
    if (!charCount[inputString[i]]) {
      charCount[inputString[i]] = 0;
    }
    charCount[inputString[i]]++;
  }
  let noMatch = 0;
  for (let char in charCount) {
    if (charCount[char] % 2 !== 0) {
      noMatch++;
      if (noMatch > 1) {
        return false;
      }
    }
  }
  return true;
}
