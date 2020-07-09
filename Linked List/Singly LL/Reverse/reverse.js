class ListNode {
  constructor(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

const reverseList = (head, prevNode) => {
  if (!head) {
    return null;
  }
  let pointer = head.next;
  head.next = prevNode;
  if (!pointer) {
    return head;
  } else {
    return reverseList(pointer, head);
  }
};
