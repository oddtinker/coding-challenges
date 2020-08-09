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

var removeElements = function(head, val) {
  // Empty node input
  if (!head) {
    return head;
  }
  while (head && head.val === val) {
    head = head.next;
  }
  let initialHeadNode = head;
  let prevNode = new ListNode();
  
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

const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);
node1.next = node2;
node2.next = node3;
node3.next = node4;

console.log(removeElements(node1, 3));