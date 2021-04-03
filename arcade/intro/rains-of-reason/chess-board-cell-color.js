function chessBoardCellColor(cell1, cell2) {
  const letters = 'ABCDEFGH';
  const [letter1, num1] = cell1;
  const [letter2, num2] = cell2;

  const numDiff = Math.abs(num1 - num2);
  const lettersDiff = Math.abs(letters.indexOf(letter1) - letters.indexOf(letter2));
  const sum = numDiff + lettersDiff;
  return sum % 2 === 0;
}
