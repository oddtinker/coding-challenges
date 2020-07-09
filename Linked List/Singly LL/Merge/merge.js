class ListNode {
  constructor(val, prev, next) {
    this.prev = (prev===undefined ? null : prev)
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

const mergeTwoLists = function(l1, l2) {
  // Cases: one or both lists are empty
  if ((!l1 && !l2) || (!l2 && l1)) {
    return l1;
  } else if (!l1 && l2) {
    return l2;
  }
  
  // Chain l2's head to l1's tail
  let chainedListHead = l1;
  while (l1) {
    if (!l1.next) {
      l1.next = l2;
      break;
    }
    l1 = l1.next;
  }
  
  // Save all nodes' values in an array
  let chainCopy = chainedListHead;
  let valuesArray = [];
  while (chainCopy) {
    valuesArray.push(chainCopy.val);
    chainCopy = chainCopy.next;
    // At the end of the copied list, reset it  and sort the array
    if (!chainCopy) {
      chainCopy = chainedListHead;
      valuesArray.sort((x, y) => x - y);
      // Replace nodes' values with the values from the array, one by one
      while (valuesArray.length > 0) {
        chainCopy.val = valuesArray.shift();
        chainCopy = chainCopy.next;
      }
      return chainedListHead;
    }
  }
};