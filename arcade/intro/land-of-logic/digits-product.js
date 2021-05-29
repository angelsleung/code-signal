function digitsProduct(product) {
  if (product === 0) {
    return 10;
  }
  return findFactors(product, '');
}

function findFactors(product, digitsString) {
  let min = null;
  if (product < 10) {
    return parseInt(digitsString + product);
  }
  for (let i = 2; i < 10; i++) {
    if (product % i === 0) {
      const digits = findFactors(product / i, digitsString + i);
      if (min > digits || min === null) {
        min = digits;
      }
    }
  }
  if (min === null) {
    return -1;
  }
  return parseInt(min);
}
