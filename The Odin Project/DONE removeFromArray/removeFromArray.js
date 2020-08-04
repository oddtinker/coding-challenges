const removeFromArray = function(arr, ...args) {
  for (let i = 0; i < args.length; i++) {
    if (arr.includes(args[i])) {
      const ind = arr.indexOf(args[i]);
      arr.splice(ind, 1);
    }
  }
  return arr;
}

export default removeFromArray;
