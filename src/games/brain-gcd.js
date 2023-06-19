import gameHandler from '../index.js';
import { getRandomNaturalNumber } from '../funcs.js';

export default () => {
  const generateAnswer = () => {
    const findGCD = (firstNumber, secondNumber) => {
      for (let i = Math.max(firstNumber, secondNumber); i >= 1; i -= 1) {
        if ((firstNumber % i === 0) && (secondNumber % i === 0)) {
          return String(i);
        }
      }
      return '1';
    };
    const firstNumber = getRandomNaturalNumber();
    const secondNumber = getRandomNaturalNumber();
    const correctAnswer = findGCD(firstNumber, secondNumber);
    const numbers = `${firstNumber} ${secondNumber}`;
    return [numbers, correctAnswer];
  };

  console.log(gameHandler('Find the greatest common divisor of given numbers.', generateAnswer));
};
