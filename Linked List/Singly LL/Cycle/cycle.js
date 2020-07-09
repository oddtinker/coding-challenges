class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */

const hasCycle = function(head) {
  // Case: empty node as input
  if (!head) {
    return false;
  }
  let valuesSet = new Set();
  while (head) {
    valuesSet.add(head);
    head = head.next;
    if (valuesSet.has(head)) {
      return true;
    }
  }
  // Case: single-node list OR !head.next
  return false;
};