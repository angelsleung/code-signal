function digitDegree(n) {
  let count = 0;
  let s = n.toString();
  while (s.length > 1) {
    let sum = 0;
    for (let i = 0; i < s.length; i++) {
      sum += parseInt(s[i]);
    }
    s = sum.toString();
    count++;
  }
  return count;
}
