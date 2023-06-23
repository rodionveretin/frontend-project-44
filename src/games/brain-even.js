import gameHandler from '../index.js';
import { getRandomInRange, isEven } from '../utils.js';

export default () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  const generateAnswer = () => {
    const secretNumber = getRandomInRange(1, 200);
    const correctAnswer = isEven(secretNumber) ? 'yes' : 'no';
    return [secretNumber, correctAnswer];
  };

  console.log(gameHandler(rules, generateAnswer));
};
