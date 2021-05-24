function isLucky(n) {
  const nString = n.toString();
  let sum = 0;
  for (let i = 0; i < nString.length; i++) {
    if (i < nString.length / 2) {
      sum += parseInt(nString[i]);
    } else {
      sum -= parseInt(nString[i]);
    }
  }
  return sum === 0;
}
