import leapYears from './leapYears';

describe('Determines whether a year is a leap year: ', () => {
  it('non-century year that is a leap year', () => {
    let result = leapYears(1996);
    expect(result).toEqual(true);
  });
  it('non-century year that is not a leap year', () => {
    let result = leapYears(1997);
    expect(result).toEqual(false);
  });
  it('futuristic non-century year that is not a leap year', () => {
    let result = leapYears(34992);
    expect(result).toEqual(true);
  });
  it('century year that is not a leap year', () => {
    let result = leapYears(1900);
    expect(result).toEqual(false);
  });
  it('century year that is a leap year', () => {
    let result = leapYears(1600);
    expect(result).toEqual(true);
  });
  it('century year that is not a leap year', () => {
    let result = leapYears(700);
    expect(result).toEqual(false);
  });
});
