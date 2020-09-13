import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function asyncQuestion(query) {
  return new Promise(resolve => {
    rl.question(query, resolve);
  });
}

export default async function main() {
  const numOfLines = await asyncQuestion("Enter the number of schedule lines: ");
  const parsedNumOfLines = parseInt(numOfLines);
  const activities = [];
  for (let i = 1; i <= parsedNumOfLines; i++) {
    const newLine = await asyncQuestion(`${i} activity: `);
    activities.push(newLine.split(' '));
  }
  rl.close();
  return activities;
}