import findTheOldest from './findTheOldest';

describe('Given an array of objects representing people with a birth and death year, return the object representing the oldest person: ', () => {
  it('if year of birth and year of death are present', () => {
    const people = [
      {
        name: 'Carly',
        yearOfBirth: 1942,
        yearOfDeath: 1970,
      },
      {
        name: 'Ray',
        yearOfBirth: 1962,
        yearOfDeath: 2011
      },
      {
        name: 'Jane',
        yearOfBirth: 1912,
        yearOfDeath: 1941
      },
    ]
    expect(findTheOldest(people).name).toEqual('Ray');
  });
  it('finds the oldest person if someone else\'s year of death is not defined', () => {
    const people = [
      {
        name: 'Carly',
        yearOfBirth: 2018,
      },
      {
        name: 'Ray',
        yearOfBirth: 1962,
        yearOfDeath: 2011
      },
      {
        name: 'Jane',
        yearOfBirth: 1912,
        yearOfDeath: 1941
      },
    ]
    expect(findTheOldest(people).name).toEqual('Ray');
  });
  it('finds the oldest person if their year of death is not defined', () => {
    const people = [
      {
        name: 'Carly',
        yearOfBirth: 1066,
      },
      {
        name: 'Ray',
        yearOfBirth: 1962,
        yearOfDeath: 2011
      },
      {
        name: 'Jane',
        yearOfBirth: 1912,
        yearOfDeath: 1941
      },
    ]
    expect(findTheOldest(people).name).toEqual('Carly');
  });

});
