function phoneCall(min1, min2_10, min11, s) {
  if (s < 1) {
    return 0;
  }
  if (s <= 10) {
    return 1 + Math.floor((s - min1) / min2_10);
  }
  return 10 + Math.floor((s - min1 - min2_10 * 9) / min11);
}
