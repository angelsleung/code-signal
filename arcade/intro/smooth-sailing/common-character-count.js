function commonCharacterCount(s1, s2) {
  const s1Chars = {};
  for (let i = 0; i < s1.length; i++) {
    if (!s1Chars[s1[i]]) {
      s1Chars[s1[i]] = 0;
    }
    s1Chars[s1[i]]++;
  }
  let commonChars = 0;
  for (let i = 0; i < s2.length; i++) {
    const char = s2[i];
    if (s1Chars[char] > 0) {
      s1Chars[char]--;
      commonChars++;
    }
  }
  return commonChars;
}
