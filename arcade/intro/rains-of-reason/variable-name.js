function variableName(name) {
  for (let i = 0; i < name.length; i++) {
    const char = name.charCodeAt(i);
    const isAcceptable = (char >= 65 && char <= 90) || (char >= 97 && char <= 122) || char === 95 || (char >= 48 && char <= 57 && i !== 0);
    if (!isAcceptable) {
      return false;
    }
  }
  return true;
}
