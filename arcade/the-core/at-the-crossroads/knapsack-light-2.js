function knapsackLight(value1, weight1, value2, weight2, maxW) {
  if (maxW >= weight1 + weight2) {
    return value1 + value2;
  }
  if (value1 >= value2) {
    if (maxW >= weight1) {
      return value1;
    }
    if (maxW >= weight2) {
      return value2;
    }
  }
  if (maxW >= weight2) {
    return value2;
  }
  if (maxW >= weight1) {
    return value1;
  }
  return 0;
}
