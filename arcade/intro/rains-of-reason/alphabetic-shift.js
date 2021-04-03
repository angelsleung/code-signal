function alphabeticShift(inputString) {
  let result = '';
  for (let i = 0; i < inputString.length; i++) {
    let char = inputString.charCodeAt(i);
    if (char === 122) {
      char = 96;
    }
    result += String.fromCharCode(char + 1);
  }
  return result;
}
