function stringsRearrangement(inputArray) {
  return getPermutations(inputArray, []);
}

function getPermutations(stringsLeft, stringsPicked) {
  if (stringsLeft.length === 0) {
    return arrayDifferBy1(stringsPicked);
  }
  for (let i = 0; i < stringsLeft.length; i++) {
    const stringsLeftCopy = stringsLeft.slice();
    const stringsPickedCopy = stringsPicked.slice();
    stringsPickedCopy.push(stringsLeftCopy.splice(i, 1)[0]);
    const success = getPermutations(stringsLeftCopy, stringsPickedCopy);
    if (success) {
      return true;
    }
  }
  return false;
}

function stringsDifferBy1(s1, s2) {
  if (s1 === s2) {
    return false;
  }
  let numDiff = 0;
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      numDiff++;
      if (numDiff > 1) {
        return false;
      }
    }
  }
  return true;
}

function arrayDifferBy1(permutation) {
  for (let i = 1; i < permutation.length; i++) {
    if (!stringsDifferBy1(permutation[i - 1], permutation[i])) {
      return false;
    }
  }
  return true;
}
