function differentSquares(matrix) {
  const arrays = {};
  for (let i = 0; i < matrix.length - 1; i++) {
    for (let j = 0; j < matrix[i].length - 1; j++) {
      const array = [matrix[i][j], matrix[i][j + 1], matrix[i + 1][j], matrix[i + 1][j + 1]];
      if (!arrays[array]) {
        arrays[array] = true;
      }
    }
  }
  return Object.keys(arrays).length;
}
