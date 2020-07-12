/* Given two given arrays of equal length, assess if the arrays are equal.
Two arrays are said to be equal if both of them contain the same set of elements. */

const evaluateEquality = (arr1, arr2) => {
  let mappedArray1 = new Map();
  let mappedArray2 = new Map();
  while (arr1.length > 0) {
    if (mappedArray1.has(arr1[0])) {
      let currentCount = mappedArray1.get(arr1[0]);
      currentCount++;
      mappedArray1.set(arr1[0], currentCount);
    } else {
      mappedArray1.set(arr1[0], 1);
    }
    arr1.shift();
  }
  while (arr2.length > 0) {
    if (mappedArray2.has(arr2[0])) {
      let currentCount = mappedArray2.get(arr2[0]);
      currentCount++;
      mappedArray2.set(arr2[0], currentCount);
    } else {
      mappedArray2.set(arr2[0], 1);
    }
    arr2.shift();
  }
  for (let [key1, value1] of mappedArray1) {
    if (!mappedArray2.has(key1)) {
      return false;
    }
    const sameKeyValue = mappedArray2.get(key1);
    if (sameKeyValue !== value1) {
      return false;
    }
  }
  return true;
}

// console.log(evaluateEquality([1, 2, 5, 4, 0], [2, 4, 5, 0, 1]));
export default evaluateEquality;