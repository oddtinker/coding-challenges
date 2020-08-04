import reverseString from './reverseString';

describe('Returns its input, reversed: ', () => {
  it('a single word', () => {
    let result = reverseString('hello');
    expect(result).toEqual('olleh');
  });
  it('multiple words', () => {
    let result = reverseString('hello there');
    expect(result).toEqual('ereht olleh')
  });
  it('numbers and punctuation', () => {
    let result = reverseString('123! abc!');
    expect(result).toEqual('!cba !321')
  });
  it('blank string', () => {
    let result = reverseString('');
    expect(result).toEqual('')
  })
});
