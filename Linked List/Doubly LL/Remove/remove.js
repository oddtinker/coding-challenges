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

const removeNode = (head, val) => {
  if (!head) {
    return null;
  }
  while (head.val === val) {
    head = head.next;
    head.prev = null;
  }
  let initialHead = head;
  let prevNode = new ListNode(undefined);
  while (head) {
    if (head.val === val) {
      head = head.next;
      prevNode.next = head;
      if (head) {
        head.prev = prevNode;
        continue;
      } else {
        // end of list
        return initialHead;
      }
    }
    prevNode = head;
    head = head.next;
  }
  return initialHead;
}

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

console.log(removeNode(node1, 1));