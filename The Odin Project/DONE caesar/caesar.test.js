import caesar from './caesar';

describe('Takes a string to be encoded and a shift factor and then returns the encoded string: ', () => {
  it('single letters', () => {
    let result = caesar('A', 1);
    expect(result).toEqual('B');
  });
  it('multiple chars', () => {
    let result = caesar('Aaa', 1);
    expect(result).toEqual('Bbb');
  });
  it('sentences', () => {
    let result = caesar('Hello, World!', 5);
    expect(result).toEqual('Mjqqt, Btwqi!');
  });
  it('negative shift', () => {
    let result = caesar('Mjqqt, Btwqi!', -5);
    expect(result).toEqual('Hello, World!');
  });
  it('wraps', () => {
    let result = caesar('Z', 1);
    expect(result).toEqual('A');
  });
  it('large shift factors', () => {
    let result = caesar('Hello, World!', 75);
    expect(result).toEqual('Ebiil, Tloia!');
  });
  it('large negative shift factors', () => {
    let result = caesar('Hello, World!', -29);
    expect(result).toEqual('Ebiil, Tloia!');
  });
});
