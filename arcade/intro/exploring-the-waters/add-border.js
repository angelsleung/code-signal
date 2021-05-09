function addBorder(picture) {
  let topBorder = '';
  for (let i = 0; i < picture[0].length + 2; i++) {
    topBorder += '*';
  }
  const newPicture = [];
  newPicture.push(topBorder);
  for (let i = 0; i < picture.length; i++) {
    const row = '*' + picture[i] + '*';
    newPicture.push(row);
  }
  newPicture.push(topBorder);
  return newPicture;
}
