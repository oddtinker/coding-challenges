import hashFunction from './largest-value';

describe('Outputs the most frequent element in an array', () => {
  it('1 is the most frequent element in an array of positive integers', () => {
    let result = hashFunction([1, 3, 2, 1, 4, 1]);
    expect(result).toEqual(1);
  });
  it('-20 is the most frequent element in an array of positive and negative integers', () => {
    let result = hashFunction([10, 20, 10, -20, 30, -20, -20]);
    expect(result).toEqual(-20);
  });
  it('Z is the most frequent element in an array of elements of various types', () => {
    let result = hashFunction([1, 'Z', -1, 'Z', 'z', 0, 'Z', 'z']);
    expect(result).toEqual('Z');
  });
});