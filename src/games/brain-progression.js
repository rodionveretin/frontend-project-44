import gameHandler from '../index.js';
import { generateProgression } from '../utils.js';

export default () => {
  const rules = 'What number is missing in the progression?';
  const generateAnswer = () => {
    const result = generateProgression();
    const progression = result[0].join(' ');
    const correctAnswer = result[1];
    return [progression, correctAnswer];
  };
  console.log(gameHandler(rules, generateAnswer));
};
