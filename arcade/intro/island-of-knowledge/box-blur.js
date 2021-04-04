function boxBlur(image) {
  const outputArray = [];
  for (let i = 0; i < image.length - 2; i++) {
    const array = [];
    for (let j = 0; j < image[i].length - 2; j++) {
      const output = getAvg(image, i, j);
      array.push(output);
    }
    outputArray.push(array);
  }
  return outputArray;
}

function getAvg(image, colStart, rowStart) {
  let sum = 0;
  for (let i = colStart; i < colStart + 3; i++) {
    for (let j = rowStart; j < rowStart + 3; j++) {
      sum += image[i][j];
    }
  }
  return Math.floor(sum / 9);
}
