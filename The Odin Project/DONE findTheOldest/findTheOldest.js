const findTheOldest = (arr) => {
  const lifeSpanArray = arr.map(person => {
    if (person.yearOfDeath === undefined) {
      const currentYear = new Date().getFullYear();
      return [person.name, currentYear - person.yearOfBirth];
    } else {
      return [person.name, person.yearOfDeath - person.yearOfBirth];
    }
  }).sort((a, b) => b[1] - a[1]);
  return arr.find(item => item.name === lifeSpanArray[0][0]);
}
export default findTheOldest;
