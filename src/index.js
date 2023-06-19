import readlineSync from 'readline-sync';
import init from './cli.js';

export default (rule, generateAnswer) => {
  const name = init();

  console.log(rule);

  let attemps = 0;
  while (attemps < 3) {
    attemps += 1;
    const data = generateAnswer();
    console.log(`Question: ${data[0]}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (playerAnswer === data[1]) {
      console.log('Correct!');
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${data[1]}'.`);
      return (`Let's try again, ${name}!`);
    }
  }
  return (`Congratulations, ${name}!`);
};
