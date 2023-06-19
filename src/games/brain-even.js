import gameHandler from '../index.js';
import { getRandomNumber } from '../funcs.js';

export default () => {
  const checkEven = (number) => number % 2 === 0;
  const generateAnswer = () => {
    const secretNumber = getRandomNumber();
    const correctAnswer = checkEven(secretNumber) ? 'yes' : 'no';
    return [secretNumber, correctAnswer];
  };

  console.log(gameHandler('Answer "yes" if the number is even, otherwise answer "no".', generateAnswer));
};
