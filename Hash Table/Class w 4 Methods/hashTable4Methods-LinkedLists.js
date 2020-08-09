class Node {
  constructor(val, next) {
    this.val = val || undefined;
    this.next = next || undefined;
  }
}

class HashTable {
  constructor(values) {
    this.values = values.sort((a,b) => a - b);
    this.map = this.createMap();
  }
  hashFunction(item) {
    return item % 10;
  }
  createMap() {
    const keysAndEmptyNodes = this.values.map(item => [this.hashFunction(item), new Node(null)]);
    const map = new Map(keysAndEmptyNodes);
    for (let [key, currentNode] of map.entries()) {
      const valuesForNodes = this.values.filter(item => this.hashFunction(item) === key);
      valuesForNodes.forEach(newNodeValue => {
        // Guarantees sorted order
        currentNode.val = newNodeValue;
        currentNode.next = new Node();
        currentNode = currentNode.next;
      })
    }
    return map;
  }
  search(item) {
    const currentKey = this.hashFunction(item);
    let currentNode = this.map.get(currentKey);
    while (currentNode) {
      if (currentNode.val === item) {
        return currentNode;
      }
      if (!currentNode.next) {
        return null;
      }
      currentNode = currentNode.next;
    }
  }
  insert(item) {
    const currentKey = this.hashFunction(item);
    let currentHead = this.map.get(currentKey);
    if (currentHead == null) {
      currentHead = new Node(item);
      this.map.set(currentKey, currentHead);
    } else {
      const prevNode = new Node(item, currentHead);
      this.map.set(currentKey, prevNode);
    }
  }
  remove(item) {
    const currentKey = this.hashFunction(item);
    let head = this.map.get(currentKey);
    let prevNode = null;
    if (head.val === item && prevNode === null) {
      head = head.next;
      return this.map.set(currentKey, head);
    }
    const initialHead = head;
    while (head) {
      prevNode = head;
      head = head.next;
      if (head.val === item) {
        prevNode.next = head.next;
        return this.map.set(currentKey, initialHead);
      }
    }
    this.map.set(currentKey, head);
  }
  getRandom() {
    const randomKey = Math.ceil(Math.random() * this.map.size);
    return this.map.get(randomKey);
  }
}

// const valuesArray = [11, 12, 13, 14, 15];
const valuesArray = [15, 14, 32, 21, 13, 12, 11, 22, 16];
let sampleHashTable = new HashTable(valuesArray);
// sampleHashTable.insert(23);
sampleHashTable.remove(32);
// console.log(sampleHashTable.search(23));
// console.log(sampleHashTable.getRandom());
console.log(sampleHashTable.map.get(2).next);