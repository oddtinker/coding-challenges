import removeFromArray from './removeFromArray';

describe('Given an array and arguments, removes provided argument(s) from array: ', () => {
  it('removes a single value', () => {
    let result = removeFromArray([1, 2, 3, 4], 3);
    expect(result).toEqual([1, 2, 4]);
  });
  it('removes multiple values', () => {
    let result = removeFromArray([1, 2, 3, 4], 3, 2);
    expect(result).toEqual([1, 4]);
  });
  it('ignores non present values', () => {
    let result = removeFromArray([1, 2, 3, 4], 7, "tacos");
    expect(result).toEqual([1, 2, 3, 4]);
  });
  it('ignores non present values, but still works', () => {
    let result = removeFromArray([1, 2, 3, 4], 7, 2);
    expect(result).toEqual([1, 3, 4]);
  });
  it('can remove all values', () => {
    let result = removeFromArray([1, 2, 3, 4], 1, 2, 3, 4);
    expect(result).toEqual([]);
  });
  it('works with strings', () => {
    let result = removeFromArray(["hey", 2, 3, "ho"], "hey", 3);
    expect(result).toEqual([2, "ho"]);
  });
  it('only removes same type', () => {
    let result = removeFromArray([1, 2, 3], "1", 3);
    expect(result).toEqual([1, 2]);
  });
});
