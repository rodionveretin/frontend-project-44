#!/usr/bin/env node
import readlineSync from 'readline-sync';
import init from '../src/cli.js';

const name = init();

console.log('Answer "yes" if the number is even, otherwise answer "no".');

for (let i = 0; i <= 3; i += 1) {
  if (i === 3) {
    console.log(`Congratulations, ${name}`);
  } else {
    const secretNumber = Math.floor(Math.random() * 1000);
    const correctAnswer = secretNumber % 2 === 0 ? 'yes' : 'no';
    console.log(`Question: ${secretNumber}`);
    const playerAnswer = readlineSync.question('Your answer? ');
    if (correctAnswer === playerAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log('Let\'s try again, Bill!');
      break;
    }
  }
}
