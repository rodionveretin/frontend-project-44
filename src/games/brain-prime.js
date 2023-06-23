import gameHandler from '../index.js';
import { getRandomInRange, isPrime } from '../utils.js';

export default () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const generateAnswer = () => {
    const randomNumber = getRandomInRange();
    const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
    return [randomNumber, correctAnswer];
  };

  console.log(gameHandler(rules, generateAnswer));
};
