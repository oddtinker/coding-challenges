import { Parent, Schedule } from './classes.js';

import inputReader from './inputReader.js';

inputReader().then(activitiesArray => {
  console.log(activitiesArray);
  const schedule = new Schedule(activitiesArray);
  const cameron = new Parent('C');
  const jamie = new Parent('J');

  schedule.assign(jamie, cameron);
  schedule.output();
});

// const activities1 = Array.of([360, 480], [420, 540], [600, 660]);
// const activities2 = Array.of([0, 1440], [1, 3], [2, 4]);
// const activities3 = Array.of([99, 150], [1, 100], [100, 301], [2, 5], [150, 250]);
