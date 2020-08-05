import fibonacci from './fibonacci';

describe('Returns the nth number of the Fibonacci sequence where each number is the sum of the two preceding numbers', () => {
  it('4th', () => {
    let result = fibonacci(4);
    expect(result).toEqual(3);
  });
  it('6th', () => {
    let result = fibonacci(6);
    expect(result).toEqual(8);
  });
  it('10th', () => {
    let result = fibonacci(10);
    expect(result).toEqual(55);
  });
  it('15th', () => {
    let result = fibonacci(15);
    expect(result).toEqual(610);
  });
  it('25th', () => {
    let result = fibonacci(25);
    expect(result).toEqual(75025);
  });
  it('doesn\'t accept negatives', () => {
    let result = fibonacci(-25);
    expect(result).toEqual("OOPS");
  });
  it('accepts strings: 1st', () => {
    let result = fibonacci("1");
    expect(result).toEqual(1);
  });
  it('accepts strings: 2nd', () => {
    let result = fibonacci("2");
    expect(result).toEqual(1);
  });
  it('accepts strings: 8th', () => {
    let result = fibonacci("8");
    expect(result).toEqual(21);
  });
});
