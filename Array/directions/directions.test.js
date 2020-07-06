import excludeOpposites from './directions';

describe('Outputs an array of non-conflicting directions', () => {
  it('for an empty input: returns an empty array', () => {
    let result = excludeOpposites([]);
    expect(result).toEqual([]);
  });
  it('for an input full of conflicting directions: returns an empty array', () => {
    let result = excludeOpposites(['NORTH', 'SOUTH', 'WEST', 'EAST']);
    expect(result).toEqual([]);
  });
  it('returns an array with one element', () => {
    let result = excludeOpposites(['NORTH', 'SOUTH', 'WEST', 'EAST', 'NORTH']);
    expect(result).toEqual(['NORTH']);
  });
});