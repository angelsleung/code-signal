function sudoku(grid) {
  return checkRow(grid) && checkCol(grid) && checkSubGrid(grid);
}

function checkRow(grid) {
  for (let i = 0; i < 9; i++) {
    if (!checkArray(grid[i])) {
      return false;
    }
  }
  return true;
}

function checkCol(grid) {
  for (let i = 0; i < 9; i++) {
    let column = [];
    for (let j = 0; j < 9; j++) {
      column.push(grid[j][i]);
    }
    if (!checkArray(column)) {
      return false;
    }
  }
  return true;
}

function getSubArray(grid, a, b) {
  let subArray = [];
  for (let i = a; i < a + 3; i++) {
    for (let j = b; j < b + 3; j++) {
      subArray.push(grid[i][j]);
    }
  }
  return subArray;
}

function checkSubGrid(grid) {
  for (let i = 0; i <= 6; i += 3) {
    for (let j = 0; j <= 6; j += 3) {
      const subArray = getSubArray(grid, i, j);
      if (!checkArray(subArray)) {
        return false;
      }
    }
  }
  return true;
}

function checkArray(array) {
  for (let j = 1; j <= 9; j++) {
    if (!array.includes(j)) {
      return false;
    }
  }
  return true;
}
