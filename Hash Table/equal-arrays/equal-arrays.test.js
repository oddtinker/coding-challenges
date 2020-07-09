import evaluateEquality from './equal-arrays';

describe('Returns a boolean representing equality of two input arrays', () => {
  it('returns true', () => {
    let result = evaluateEquality([1, 2, 5, 4, 0], [2, 4, 5, 0, 1]);
    expect(result).toEqual(true);
  });
  it('returns true', () => {
    let result = evaluateEquality([1, 2, 5, 4, 0, 2, 1], [2, 4, 5, 0, 1, 1, 2]);
    expect(result).toEqual(true);
  });
  it('returns false', () => {
    let result = evaluateEquality([1, 7, 1], [7, 7, 1]);
    expect(result).toEqual(false);
  });
});