function minesweeper(matrix) {
  const resultArray = [];
  for (let j = 0; j < matrix.length; j++) {
    const array = [];
    for (let i = 0; i < matrix[j].length; i++) {
      array.push(countMines(matrix, i, j));
    }
    resultArray.push(array);
  }
  return resultArray;
}

function countMines(matrix, x, y) {
  let count = 0;
  for (let j = y - 1; j <= y + 1; j++) {
    if (j === -1 || j >= matrix.length) {
      continue;
    }
    for (let i = x - 1; i <= x + 1; i++) {
      if (i === -1 || i >= matrix[j].length) {
        continue;
      }
      if (matrix[j][i]) {
        count++;
      }
    }
  }
  return count - matrix[y][x];
}
