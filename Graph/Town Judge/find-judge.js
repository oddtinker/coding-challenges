function findJudge(N, trust) {
    if (N === 1 && trust.length === 0) {
        return 1;
    }
    
  let citizens = new Set();
  let possibleJudges = new Set();

  for (let i = 0, len = trust.length; i < len; i++) {
    citizens.add(trust[i][0]);
    possibleJudges.add(trust[i][1]);
  }
    
if (citizens.size !== N - 1) {
    return -1;
  }
    
  let citizensArray = Array.from(citizens);
  let trusteesArray = [];
  citizensArray.forEach(citizen => {
    trusteesArray.push(trust
    .filter(item => item[0] === citizen)
    .map(item => item[1]));
  })

  for (const person of possibleJudges) {
    citizens.has(person) && possibleJudges.delete(person);
    let isTrusted = trusteesArray.every(citizen => citizen.some(candidate => candidate === person));
    if (isTrusted) {
      return person;
    }
  }
    return -1;
};