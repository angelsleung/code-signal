function matrixElementsSum(matrix) {
  const numFloors = matrix.length;
  let sumGoodRooms = 0
  const hauntedCols = [];
  for (let i = 0; i < numFloors; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        hauntedCols.push(j);
      } else if (!hauntedCols.includes(j)) {
        sumGoodRooms += matrix[i][j];
      }
    }
  }
  return sumGoodRooms;
}
