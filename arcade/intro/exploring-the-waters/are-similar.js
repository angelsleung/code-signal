function areSimilar(a, b) {
  if (sameArray(a, b)) {
    return true;
  }
  if (a.length !== b.length) {
    return false;
  }
  const mismatchIndex = [];
  for (var i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      mismatchIndex.push(i);
    }
  }
  if (mismatchIndex.length !== 2) {
    return false;
  }
  return a[mismatchIndex[0]] === b[mismatchIndex[1]] &&
    a[mismatchIndex[1]] === b[mismatchIndex[0]];
}

function sameArray(a, b) {
  for (var i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
}
