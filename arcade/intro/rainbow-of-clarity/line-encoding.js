function lineEncoding(s) {
  let encodedString = '';
  let letterCount = 1;
  for (let i = 0; i < s.length; i++) {
    let letter = s[i];
    if (s[i] === s[i + 1]) {
      letterCount++;
    } else {
      if (letterCount === 1) {
        letterCount = '';
      }
      encodedString += letterCount + letter;
      letterCount = 1;
    }
  }
  return encodedString;
}
