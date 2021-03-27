function differentSymbolsNaive(s) {
  var chars = [];
  for (var i = 0; i < s.length; i++) {
    if (!chars.includes(s[i])) {
      chars.push(s[i]);
    }
  }
  return chars.length;
