function spiralNumbers(n) {
  const max = n ** 2;
  let matrix = [];
  for (let i = 0; i < n; i++) {
    matrix.push([]);
  }
  let num = 1;
  let index = 0;
  [matrix, num] = goRight(index, n, num, matrix);
  while (num < max) {
    [matrix, num] = goDown(index, n, num, matrix);
    [matrix, num] = goLeft(index, n, num, matrix);
    if (num === max) {
      return matrix;
    }
    [matrix, num] = goUp(index, n, num, matrix);
    index++;
    [matrix, num] = goRight(index, n, num, matrix);
  }
  return matrix;
}

function goRight(index, n, num, matrix) {
  for (let i = index; i < n - index; i++) {
    matrix[index][i] = num;
    num++;
  }
  return [matrix, num];
}

function goDown(index, n, num, matrix) {
  for (let i = index + 1; i < n - 1 - index; i++) {
    matrix[i][n - 1 - index] = num;
    num++;
  }
  return [matrix, num];
}

function goLeft(index, n, num, matrix) {
  for (let i = n - 1 - index; i >= index; i--) {
    matrix[n - 1 - index][i] = num;
    num++;
  }
  return [matrix, num];
}

function goUp(index, n, num, matrix) {
  for (let i = n - 2 - index; i > index; i--) {
    matrix[i][index] = num;
    num++;
  }
  return [matrix, num];
}
