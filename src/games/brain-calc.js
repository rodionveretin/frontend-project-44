import gameHandler from '../index.js';
import { getRandomInRange, getExpression } from '../utils.js';

export default () => {
  const rules = 'What is the result of the expression?';
  const generateAnswer = () => {
    const firstNumber = getRandomInRange();
    const secondNumber = getRandomInRange();
    const [expession, correctAnswer] = getExpression(firstNumber, secondNumber);
    return [expession, correctAnswer];
  };

  console.log(gameHandler(rules, generateAnswer));
};
