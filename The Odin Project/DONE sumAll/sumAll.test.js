import sumAll from './sumAll';

describe('Returns the sum of every number between (and including) two inputted integers: ', () => {
  it('in the range between 1 to 4', () => {
    let result = sumAll(1, 4);
    expect(result).toEqual(10);
  });
  it('in the range between 1 to 4000', () => {
    let result = sumAll(1, 4000);
    expect(result).toEqual(8002000);
  });
  it('reverse order, in the range between 123 to 1', () => {
    let result = sumAll(123, 1);
    expect(result).toEqual(7626);
  });
  it('returns ERROR with negative numbers', () => {
    let result = sumAll(-10, 4);
    expect(result).toEqual('ERROR');
  });
  it('returns ERROR with non-number parameters', () => {
    let result = sumAll(10, "90");
    expect(result).toEqual('ERROR');
  });
  it('returns ERROR with non-number parameters', () => {
    let result = sumAll(10, [90, 1]);
    expect(result).toEqual('ERROR');
  });
});
