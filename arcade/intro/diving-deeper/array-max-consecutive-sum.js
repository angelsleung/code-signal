function arrayMaxConsecutiveSum(inputArray, k) {
  let max = 0;
  for (let i = 0; i < inputArray.length - k + 1; i++) {
    let sum = 0;
    for (let j = i; j < i + k; j++) {
      sum += inputArray[j];
    }
    max = Math.max(max, sum);
  }
  return max;
}
