function absoluteValuesSumMinimization(a) {
  let minDiff = null;
  let closestElement = null;
  for (let i = 0; i < a.length; i++) {
    let sum = 0;
    for (let j = 0; j < a.length; j++) {
      sum += Math.abs(a[j] - a[i]);
    }
    if (sum < minDiff || minDiff === null) {
      minDiff = sum;
      closestElement = a[i];
    }
  }
  return closestElement;
}
