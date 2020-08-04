import repeatString from './repeatString';

describe('Repeats the string a given number of times: ', () => {
  it('doesn\'t repeat blank strings', () => {
    let result = repeatString('', 10);
    expect(result).toEqual('');
  });
  it('doesn\'t repeat when string is empty and input is 0', () => {
    let result = repeatString('hey', 0);
    expect(result).toEqual('');
  });
  it('doesn\'t repeat when input is 1', () => {
    let result = repeatString('hey', 1);
    expect(result).toEqual('hey');
  });
  it('thrice', () => {
    let result = repeatString('hey', 3);
    expect(result).toEqual('heyheyhey');
  });
  it('10 times', () => {
    let result = repeatString('hey', 10);
    expect(result).toEqual('heyheyheyheyheyheyheyheyheyhey');
  });
  it('a random amount of times', () => {
    const number = Math.floor(Math.random() * 1000)
    /* regexp provided by Odin */
    let result = repeatString('hey', number).match(/((hey))/g).length;
    expect(result).toEqual(number);
  });
  
  it('returns ERROR with negative numbers', () => {
    let result = repeatString('hey', -1);
    expect(result).toEqual('ERROR');
  });
});
