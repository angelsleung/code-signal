function deleteDigit(n) {
  const nString = n.toString();
  let max = 0;
  for (let i = 0; i < nString.length; i++) {
    let newNum = nString.slice(0, i) + nString.slice(i + 1);
    max = Math.max(max, parseInt(newNum));
  }
  return max;
}
