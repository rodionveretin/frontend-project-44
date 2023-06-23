import gameHandler from '../index.js';
import { getRandomInRange, findGCD } from '../utils.js';

export default () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  const generateAnswer = () => {
    const firstNumber = getRandomInRange(1, 100);
    const secondNumber = getRandomInRange(1, 100);
    const correctAnswer = findGCD(firstNumber, secondNumber);
    const numbers = `${firstNumber} ${secondNumber}`;
    return [numbers, correctAnswer];
  };

  console.log(gameHandler(rules, generateAnswer));
};
