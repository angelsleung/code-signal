function arrayReplace(inputArray, elemToReplace, substitutionElem) {
  const resultArray = [];
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] === elemToReplace) {
      resultArray.push(substitutionElem);
    } else {
      resultArray.push(inputArray[i]);
    }
  }
  return resultArray;
}
