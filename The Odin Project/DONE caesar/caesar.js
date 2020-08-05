const caesar = (str, key) => {
  let encodedWord = '';
  for (let i = 0; i < str.length; i++) {
    const currentCode = str.charCodeAt(i);
    let newLetterCode;
    if (currentCode >= 65 && currentCode <= 90) {
      if (key > 0) {
        newLetterCode = ((currentCode - 65 + key) % 26) + 65;
      } else {
        newLetterCode = ((currentCode - 90 + key) % 26) + 90;
      }
    } else if (currentCode >= 97 && currentCode <= 122) {
      if (key > 0) {
        newLetterCode = ((currentCode - 97 + key) % 26) + 97;
      } else {
        newLetterCode = ((currentCode - 122 + key) % 26) + 122;
      }
    } else {
      encodedWord += str.charAt(i);
      continue;
    }
    encodedWord += String.fromCharCode(newLetterCode);
  }
  return encodedWord;
}

export default caesar;