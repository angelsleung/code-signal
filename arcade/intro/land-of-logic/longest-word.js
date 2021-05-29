function longestWord(text) {
  let longestWord = '';
  let currentWord = '';
  for (let i = 0; i < text.length; i++) {
    const charCode = text[i].charCodeAt();
    if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123)) {
      currentWord += text[i];
    } else {
      if (currentWord.length > longestWord.length) {
        longestWord = currentWord;
      }
      currentWord = '';
    }
  }
  if (currentWord.length > longestWord.length) {
    longestWord = currentWord;
  }
  return longestWord;
}
