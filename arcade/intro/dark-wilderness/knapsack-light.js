function knapsackLight(value1, weight1, value2, weight2, maxW) {
    if (maxW >= weight1 + weight2) {
        return value1 + value2;
    }
    let maxVal = 0;
    if (maxW >= weight1) {
        maxVal = value1;
    }
    if (maxW >= weight2) {
        maxVal = Math.max(maxVal, value2);
    }
    return maxVal;
}
