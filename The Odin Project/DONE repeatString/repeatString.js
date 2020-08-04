const repeatString = (input, times) => {
  if (times === 0 || input.length === 0) {
    return '';
  } else if (times < 0) {
    return 'ERROR';
  }
  let result = '';
  while (times > 0) {
    result += input;
    times--;
  }
  return result;
}

export default repeatString;
