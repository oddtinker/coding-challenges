import { ftoc, ctof } from './tempConversion';

describe("Converts temperatures...", () => {
  describe('from Fahrenheit to Celsius: ', () => {
    it('32F', () => {
      let result = ftoc(32);
      expect(result).toEqual(0);
    });
    it('rounds result to 1 decimal', () => {
      let result = ftoc(100);
      expect(result).toEqual(37.8);
    });
    it('works with negatives', () => {
      let result = ftoc(-100);
      expect(result).toEqual(-73.3);
    });
  });
  
  describe('from Celsius to Fahrenheit: ', () => {
    it('0C', () => {
      let result = ctof(0);
      expect(result).toEqual(32);
    });
    it('rounds result to 1 decimal', () => {
      let result = ctof(73.2);
      expect(result).toEqual(163.8);
    });
    it('works with negatives', () => {
      let result = ctof(-10);
      expect(result).toEqual(14);
    });
  });
})
