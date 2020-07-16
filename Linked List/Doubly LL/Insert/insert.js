class ListNode {
  constructor(val, prev, next) {
    this.prev = (prev===undefined ? null : prev);
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
  }
}
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

const insertNode = (head, val) => {
  if (!head) {
    return new ListNode(val);
  }
  let initialHead = head;
  while (head) {
    if (val === head.val - 1 || val === head.val) {
      let copyPrev = head.prev;
      head.prev = new ListNode(val, copyPrev, head);
      return initialHead;
    }
    if (!head.next) {
      head.next = new ListNode(val, head, null);
      return initialHead;
    }
    head = head.next;
  }
}

// for testing
const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);

node1.next = node2;
node2.prev = node1;
node2.next = node3;
node3.prev = node2;
node3.next = node4;
node4.prev = node3;

console.log(insertNode(null, 5));