class HashTable {
  constructor(values) {
    this.values = values;
    this.map = this.createMap();
  }
  hashFunction(item) {
    return item % 10;
  }
  createMap() {
    const flatMap = [];
    const keys = this.values.map(item => this.hashFunction(item));
    for (let i = 0; i < this.values.length; i++) {
      flatMap.push([keys[i], this.values[i]]);
    }
    return new Map(flatMap);
  }
  insert(item) {
    for (let value of this.map.values()) {
      if (value === item) {
        return;
      }
    }
    let newKey = this.hashFunction(item);
    this.map.set(newKey, item);
  }
  remove(item) {
    for (let [key, value] of this.map.entries()) {
      if (value === item) {
        this.map.delete(key);
      }
    }
  }
  search(item) {
    for (let [key, value] of this.map.entries()) {
      if (value === item) {
        return key;
      }
    }
  }
  getRandom() {
    const randomKey = Math.ceil(Math.random() * this.map.size);
    return this.map.get(randomKey);
  }
}

const valuesArray = [11, 12, 13, 14, 15];
let sampleHashTable = new HashTable(valuesArray);
sampleHashTable.insert(10);
// sampleHashTable.remove(3);
// sampleHashTable.remove(13);
sampleHashTable.search(15);
console.log(sampleHashTable.map);
console.log(sampleHashTable.getRandom());

