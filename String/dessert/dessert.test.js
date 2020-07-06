import formOrder from './dessert';

describe('Outputs an alphabetically sorted string of ingredients', () => {
  describe('for a Classic recipe:', () => {
    it('unchanged', () => {
      let result = formOrder('Classic');
      expect(result).toEqual('banana,honey,ice,mango,peach,pineapple,strawberry,yogurt');
    });
    it('without strawberry', () => {
      let result = formOrder('Classic, -strawberry');
      expect(result).toEqual('banana,honey,ice,mango,peach,pineapple,yogurt');
    });
    it('without strawberry and banana', () => {
      let result = formOrder('Classic, -strawberry, -banana');
      expect(result).toEqual('honey,ice,mango,peach,pineapple,yogurt');
    });
  });
  describe('for a \'Vegan Delite\' recipe:', () => {
    it('unchanged ', () => {
      let result = formOrder('Vegan Delite');
      expect(result).toEqual('ice,mango,passion fruit,peach,pineapple,soy milk,strawberry');
    });
    it('without passion fruit', () => {
      let result = formOrder('Vegan Delite, -passion fruit');
      expect(result).toEqual('ice,mango,peach,pineapple,soy milk,strawberry');
    });
    it('ignoring an ingredient that is not in the recipe', () => {
      let result = formOrder('Vegan Delite, -honey');
      expect(result).toEqual('ice,mango,passion fruit,peach,pineapple,soy milk,strawberry');
    });
  });
});