import gameHandler from '../index.js';
import { getRandomNumber } from '../funcs.js';

export default () => {
  const generateAnswer = () => {
    const getExpression = (firstNumber, secondNumber) => {
      const result = Math.floor(Math.random() * 3) + 1;
      switch (result) {
        case 1:
          return [`${firstNumber} + ${secondNumber}`, String(+firstNumber + +secondNumber)];
        case 2:
          return [`${firstNumber} - ${secondNumber}`, String(+firstNumber - +secondNumber)];
        case 3:
          return [`${firstNumber} * ${secondNumber}`, String(+firstNumber * +secondNumber)];
        default:
          return [`${firstNumber} + ${secondNumber}`, String(+firstNumber + +secondNumber)];
      }
    };
    const firstNumber = getRandomNumber();
    const secondNumber = getRandomNumber();
    const [expession, correctAnswer] = getExpression(firstNumber, secondNumber);
    return [expession, correctAnswer];
  };

  console.log(gameHandler('What is the result of the expression?', generateAnswer));
};
