/* A navigator simulator, from Qualified.
Given an array of strings, output an array of directions, minus conflicting ones. */

const opposites = {
  NORTH: 'SOUTH',
  SOUTH: 'NORTH',
  WEST: 'EAST',
  EAST: 'WEST',
}

function excludeOpposites(arr) {
  let index = 0;
  // I'm using a while loop for more control over the iterator
  while (index < arr.length) {
    let opposite = opposites[arr[index]];
    // Backtrack if two opposites are side by side
    if (arr[index - 1] === opposite) {
      index--;
      arr.splice(index, 2);
      continue;
    }
    index++;
  }
  return arr;
}

export default excludeOpposites;