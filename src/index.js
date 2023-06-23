import readlineSync from 'readline-sync';
import makeWelcome from './cli.js';

export default (rules, generateRound) => {
  const name = makeWelcome();

  console.log(rules);

  const roundsCount = 3;

  for (let i = 0; i < roundsCount; i += 1) {
    const [question, answer] = generateRound();
    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (playerAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      return (`Let's try again, ${name}!`);
    }
  }

  return (`Congratulations, ${name}!`);
};
