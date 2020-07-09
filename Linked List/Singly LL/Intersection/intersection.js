class ListNode {
  constructor(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

const getIntersectionNode = function(headA, headB) {
  if (headA === headB) {
    return headA;
  }
  let copyB = headB;
  while (headA) {
    while (copyB) {
      if (headA == copyB) {
        return headA;
      }
      copyB = copyB.next;
    }
    copyB = headB;
    headA = headA.next;
  }
  return null;
};