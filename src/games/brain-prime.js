import gameHandler from '../index.js';
import { getRandomNumber } from '../funcs.js';

export default () => {
  const generateAnswer = () => {
    const isPrime = (number) => {
      if (number < 2) {
        return false;
      }
      for (let i = 2; i < number; i += 1) {
        if (number % i === 0) return false;
      }
      return true;
    };
    const randomNumber = getRandomNumber();
    const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
    return [randomNumber, correctAnswer];
  };

  console.log(gameHandler('Answer "yes" if given number is prime. Otherwise answer "no".', generateAnswer));
};
