function isBeautifulString(inputString) {
  const charCounts = [];
  for (let i = 0; i < inputString.length; i++) {
    const index = inputString[i].charCodeAt() % 97;
    if (!charCounts[index]) {
      charCounts[index] = 0;
    }
    charCounts[index]++;
  }
  for (let i = 0; i < charCounts.length; i++) {
    if (!charCounts[i] || charCounts[i] < charCounts[i + 1]) {
      return false;
    }
  }
  return true;
}
