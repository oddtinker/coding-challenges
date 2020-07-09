class ListNode {
  constructor(val, prev, next) {
    this.prev = (prev===undefined ? null : prev)
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
const removeElements = function(head, val) {
  // Empty node input
  if (!head) {
    return head;
  }
  while (head && head.val === val) {
    head = head.next;
  }
  let initialHeadNode = head;
  let prevNode = ListNode(undefined, undefined);
  
  while (head) {
    if (head.val === val) {
      prevNode.next = head.next;
      head = head.next;
      continue;
    }
    prevNode = head;
    head = head.next;
  }
  return initialHeadNode;
};