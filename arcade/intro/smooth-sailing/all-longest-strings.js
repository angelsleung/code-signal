function allLongestStrings(inputArray) {
  let maxLength = 0;
  let newArray = [];
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].length > maxLength) {
      maxLength = inputArray[i].length;
      newArray = [inputArray[i]];
    } else if (inputArray[i].length === maxLength) {
      newArray.push(inputArray[i]);
    }
  }
  return newArray;
}
