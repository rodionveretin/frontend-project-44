import gameHandler from '../index.js';
import { getRandomNaturalNumber } from '../funcs.js';

export default () => {
  const generateProgression = () => {
    const length = Math.floor(Math.random() * 11) + 5;
    const difference = getRandomNaturalNumber();
    const progression = [];
    for (let i = 1; i <= length; i += 1) {
      progression.push(i * difference);
    }
    const replacePosition = Math.floor(Math.random() * length);
    const result = String(progression.splice(replacePosition, 1, '..').join());
    return [progression, result];
  };
  const generateAnswer = () => {
    const result = generateProgression();
    const progression = result[0].join(' ');
    const correctAnswer = result[1];
    return [progression, correctAnswer];
  };
  console.log(gameHandler('What number is missing in the progression?', generateAnswer));
};
