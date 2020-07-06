const hashFunction = arr => {
  let mapFromArray = new Map();
  while (arr.length) {
    if (mapFromArray.has(arr[0])) {
      let currentValue = mapFromArray.get(arr[0]);
      currentValue++;
      mapFromArray.set(arr[0], currentValue);
    } else {
      mapFromArray.set(arr[0], 1);
    }
    arr.shift();
  }
  let largestValue = Math.max(...mapFromArray.values());
  for (let [key, value] of mapFromArray) {
    if (value === largestValue) {
      return key;
    }
  }
}

export default hashFunction;