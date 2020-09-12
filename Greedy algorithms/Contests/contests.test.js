const returnResult = require('./greedy');

describe('from 6 members and 4 groups', () => {
  it('returns 3 real groups and one fail', () => {
    let result = returnResult([
      [21, 1000],
      [13, 500],
      [24, 5000],
      [25, 1000],
      [75, 8000],
      [30, 4000]
    ],
    [
      [10, 105],
      [13, 24],
      [10, 23],
      [20, 30]
    ]);
    expect(result).toEqual([ [ 5, 3, 6 ], [ 3, 1, 2 ], -1, [ 3, 6, 1 ] ]);
  });
});
describe('from 9 members and 4 groups', () => {
  it('returns 3 real groups and one fail', () => {
    let result = returnResult([
      [34, 2000],
      [12, 1500],
      [56, 2500],
      [67, 2500],
      [25, 2600],
      [18, 1800],
      [68, 3000],
      [99, 1300],
      [55, 2600]
    ],
    [
      [6, 11],
      [12, 37],
      [50, 80],
      [25, 100]
    ]);
    expect(result).toEqual([ -1, [ 5, 1, 6 ], [ 7, 9, 3 ], [ 7, 5, 9 ] ]);
  });
});