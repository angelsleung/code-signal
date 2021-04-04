function arrayMaximalAdjacentDifference(inputArray) {
  let maxDiff = 0;
  for (let i = 0; i < inputArray.length - 1; i++) {
    const currentDiff = Math.abs(inputArray[i] - inputArray[i + 1]);
    maxDiff = Math.max(maxDiff, currentDiff);
  }
  return maxDiff;
}
