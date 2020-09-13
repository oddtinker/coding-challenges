import fs from 'fs';

class Parent {
  constructor (name) {
    this.name = name;
    this.occupiedUntil = null;
    this.assign = this.assign.bind(this);
  }
  assign (activityEnd) {
    this.occupiedUntil = activityEnd;
  }
}

class Activity {
  constructor (start, end) {
      this.start = start;
      this.end = end;
  }
}

class Schedule {
  constructor (activities) {
    this.schedule = '';
    this.activities = this.populateActivities(activities);
    this.populateActivities = this.populateActivities.bind(this);
    this.output = this.output.bind(this);
    this.assign = this.assign.bind(this);
  }
  populateActivities (activitiesArray) {
    const classyActivities = [];
    activitiesArray.sort((a, b) => a[1] - b[1]);
    for (let i = 0; i < activitiesArray.length; i++) {
      classyActivities.push(new Activity(parseInt(activitiesArray[i][0]), parseInt(activitiesArray[i][1])));
    }
    return classyActivities;
  }
  output () {
    console.log(this.schedule);
  }
  assign (parent1, parent2) {
    for (const activity of this.activities) {
      if (parent1.occupiedUntil <= activity.start) {
        parent1.assign(activity.end);
        this.schedule += parent1.name;
      } else if (parent2.occupiedUntil <= activity.start) {
        parent2.assign(activity.end);
        this.schedule += parent2.name;
      } else {
        this.schedule = 'IMPOSSIBLE';
        break;
      }
    }
  }
}

function main(filePath = '') {
  function readInput(path) {
    const input = fs.readFileSync(path, { encoding:'utf8', flag:'r' }).split('\n');
    let numOfCases = parseInt(input.splice(0, 1), 10);
    const cases = [numOfCases];
    while (numOfCases > 0) {
      const currentCase = input.splice(0, parseInt(input[0], 10) + 1);
      cases.push(currentCase);
      numOfCases--;
    }
    return cases;
  }

  function computeInput(allCasesArray) {
    const numOfCases = parseInt(allCasesArray[0], 10);
    
    function computeSingleTestCase(caseArray) {
      const numOfLines = parseInt(caseArray[0], 10);
      const activities = [];
      for (let j = 1; j <= numOfLines; j++) {
        activities.push(caseArray[j].split(' '));
      }
      return activities;
    }
    
    for (let i = 1; i <= numOfCases; i++) {
      const activitiesArray = computeSingleTestCase(allCasesArray[i]);
      const schedule = new Schedule(activitiesArray);
      const cameron = new Parent('C');
      const jamie = new Parent('J');
      schedule.assign(jamie, cameron);
      schedule.output();
    }
  }
  const inputArray = readInput(filePath);
  return computeInput(inputArray);
}

main('./sampleCases.txt');