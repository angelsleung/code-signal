function makeArrayConsecutive2(statues) {
  let missingCount = 0;
  let minNum = null;
  let maxNum = null;
  for (let i = 0; i < statues.length; i++) {
    if (minNum === null && maxNum === null) {
      minNum = statues[i];
      maxNum = statues[i];
    } else {
      if (statues[i] < minNum) {
        minNum = statues[i];
      }
      if (statues[i] > maxNum) {
        maxNum = statues[i];
      }
    }
  }
  for (let currentNum = minNum + 1; currentNum < maxNum; currentNum++) {
    if (!statues.includes(currentNum)) {
      missingCount++;
    }
  }
  return missingCount;
}
