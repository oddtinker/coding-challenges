/* Given two given arrays of equal length, assess if the arrays are equal.
Two arrays are said to be equal if both of them contain the same set of elements. */

const evaluateEquality = (arr1, arr2) => {
  let concatenatedArrays = arr1.concat(arr2);
  let mappedArrays = new Map();
  while (concatenatedArrays.length) {
    if (mappedArrays.has(concatenatedArrays[0])) {
      let currentCount = mappedArrays.get(concatenatedArrays[0]);
      currentCount++;
      mappedArrays.set(concatenatedArrays[0], currentCount);
    } else {
      mappedArrays.set(concatenatedArrays[0], 1);
    }
    concatenatedArrays.shift();
  }
  for (let value of mappedArrays.values()) {
    if (value % 2 != 0) {
      return false;
    }
  }
  return true;
}

export default evaluateEquality;