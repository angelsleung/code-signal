function sortByHeight(a) {
  const heights = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== -1) {
      heights.push(a[i]);
    }
  }
  heights.sort(compareNumbers);
  const resultArray = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] === -1) {
      resultArray.push(-1);
    } else {
      const nextHeight = heights.shift();
      resultArray.push(nextHeight);
    }
  }
  return resultArray;
}

function compareNumbers(a, b) {
  return a - b;
}
