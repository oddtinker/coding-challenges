class Member {
  constructor(id, age, skillpoints) {
    this.id = id;
    this.age = age;
    this.skillpoints = skillpoints;
  }
}

class Group {
  constructor(ageMin, ageMax) {
    this.ageMin = ageMin;
    this.ageMax = ageMax;
    this.members = [];
  }
  addMember = member => {
    if (this.members.length < 3 && member.age >= this.ageMin && member.age <= this.ageMax) {
      this.members.push(member.id);
    }
  }
  output = () => {
    if (this.members.length < 3) {
      return -1;
    }
    return this.members;
  }
}

function returnResult (memberDetails, groupDetails) {
  memberDetails.forEach((item, index) => item.unshift(index + 1));
  memberDetails.sort((a, b) => b[2] - a[2]);
  const members = new Map();
  for (const member of memberDetails) {
    const currentMember = new Member(member[0], member[1], member[2]);
    members.set(currentMember.id, currentMember);
  }
  const groups = [];
  for (const group of groupDetails) {
    const newGroup = new Group(group[0], group[1]);
    members.forEach(member => newGroup.addMember(member));
    groups.push(newGroup);
  }
  return groups.map(group => group.output());
}

module.exports = returnResult;