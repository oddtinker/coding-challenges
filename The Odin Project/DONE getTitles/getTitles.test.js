import getTitles from './getTitles';

describe('Given an array of objects, returns an array of titles: ', () => {
    const books = [
      {
        title: 'Book',
        author: 'Name'
      },
      {
        title: 'Book2',
        author: 'Name2'
      },
      {
        title: 'Book3',
        author: 'Name3'
      }
    ]

  it('gets titles', () => {
    let result = getTitles(books);
    expect(result).toEqual(['Book', 'Book2', 'Book3']);
  });

});
