function buildPalindrome(st) {
  const lastIndex = st.length - 1;
  let lettersToReverse = st.slice(0, lastIndex);
  for (let i = 0; i < st.length - 1; i++) {
    if (st[i] === st[lastIndex]) {
      const partialPalindrome = st.slice(i);
      if (isPalindrome(partialPalindrome)) {
        lettersToReverse = st.slice(0, i);
        break;
      }
    }
  }
  return st + reverse(lettersToReverse);
}

function isPalindrome(st) {
  for (let i = 0; i < st.length / 2; i++) {
    if (st[i] !== st[st.length - i - 1]) {
      return false;
    }
  }
  return true;
}

function reverse(st) {
  let string = '';
  for (let i = st.length - 1; i >= 0; i--) {
    string += st[i];
  }
  return string;
}
