function avoidObstacles(inputArray) {
  const largestNum = inputArray.reduce((a, b) => Math.max(a, b));
  let location = 0;
  let jumpSize = 2;

  for (let i = 0; i < largestNum / 2; i++) {
    location += jumpSize;
    if (inputArray.includes(location)) {
      jumpSize++;
      location = 0;
      i = 0;
    }
  }
  return jumpSize;
}
