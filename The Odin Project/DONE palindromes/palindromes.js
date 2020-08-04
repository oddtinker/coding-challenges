const validatePalindrome = (str) => {
  str = str.toLocaleUpperCase('en-gb').split('').filter(item => item.match(/[A-Z]/));
  let rightIndex = str.length - 1;
  for (let leftIndex = 0; leftIndex < str.length; leftIndex++) {
    if (str[leftIndex] !== str[rightIndex]) {
      return false;
    }
    rightIndex--;
  }
  return true;
}

export default validatePalindrome;