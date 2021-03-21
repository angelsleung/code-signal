function chessKnight(cell) {
  return checkMoves(cell, 1, 2) + checkMoves(cell, 2, 1) +
    + checkMoves(cell, -1, 2) + checkMoves(cell, -2, 1);
}

function inBounds(index) {
  return index >= 0 && index <= 7;
}

function checkMoves(cell, count1, count2) {
  let moves = 0;
  const letters = 'abcdefgh';
  const numIndex = cell[1] - 1;
  const letterIndex = letters.indexOf(cell[0]);
  if (inBounds(numIndex + count1)) {
    if (inBounds(letterIndex + count2)) {
      moves++;
    }
    if (inBounds(letterIndex - count2)) {
      moves++;
    }
  }
  return moves;
}
