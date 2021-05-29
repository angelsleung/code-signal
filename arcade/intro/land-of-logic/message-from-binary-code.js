function messageFromBinaryCode(code) {
  let message = '';
  for (let i = 0; i < code.length - 7; i += 8) {
    let charCode = getCharCode(code.slice(i, i + 8));
    message += String.fromCharCode(charCode);
  }
  return message;
}

function getCharCode(code) {
  let num = 0;
  for (let i = 0; i < 8; i++) {
    if (code[i] === '1') {
      num += Math.pow(2, 7 - i);
    }
  }
  return num;
}
