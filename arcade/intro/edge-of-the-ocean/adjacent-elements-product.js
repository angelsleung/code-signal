function adjacentElementsProduct(inputArray) {
  let maxProduct = null;
  for (var i = 0; i < inputArray.length - 1; i++) {
    const product = inputArray[i] * inputArray[i + 1];
    if (product > maxProduct || maxProduct === null) {
      maxProduct = product;
    }
  }
  return maxProduct;
}
