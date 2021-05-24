function shapeArea(n) {
  var count = 1;
  for (var i = 1; i < n; i++) {
    count += 4 * i;
  }
  return count;
}
