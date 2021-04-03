function depositProfit(deposit, rate, threshold) {
  let year = 0;
  while (deposit < threshold) {
    deposit *= (rate / 100 + 1);
    year++;
  }
  return year;
}
