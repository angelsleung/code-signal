function fileNaming(names) {
  if (names.length === 0) {
    return names;
  }
  const newNames = [names[0]];
  for (let i = 1; i < names.length; i++) {
    let fileName = names[i];
    if (newNames.includes(fileName)) {
      fileName = names[i] + '(1)';
    }
    while (newNames.includes(fileName)) {
      const numIndex = fileName.length - 2;
      const num = parseInt(fileName[numIndex]) + 1;
      fileName = fileName.slice(0, numIndex) + num + ')';
    }
    newNames.push(fileName);
  }
  return newNames;
}
