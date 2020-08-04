import validatePalindrome from './palindromes';

describe('Determines whether or not a given string is a palindrome without considering punctuation or word breaks: ', () => {
  it('covers single words', () => {
    let result = validatePalindrome('racecar');
    expect(result).toEqual(true);
  });
  it('covers single words, ignores punctuation', () => {
    let result = validatePalindrome('Racecar!');
    expect(result).toEqual(true);
  });
  it('covers multiple words, ignores punctuation', () => {
    let result = validatePalindrome('Car, a man, a maraca.');
    expect(result).toEqual(false);
  });
  it('covers multiple words, ignores punctuation', () => {
    let result = validatePalindrome('Animal loots foliated detail of stool lamina.');
    expect(result).toEqual(true);
  });
});
