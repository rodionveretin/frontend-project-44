export const getRandomInRange = (min = 0, max = 100) => {
  const result = min + Math.random() * (max - min + 1);
  return Math.floor(result);
};

export const getExpression = (firstNumber, secondNumber) => {
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

export const generateProgression = () => {
  const length = getRandomInRange(5, 15);
  const difference = getRandomInRange(2, 12);
  const progression = [];
  for (let i = 1; i <= length; i += 1) {
    progression.push(i * difference);
  }
  const replacePosition = Math.floor(Math.random() * length);
  const result = String(progression.splice(replacePosition, 1, '..').join());
  return [progression, result];
};

export const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};

export const findGCD = (firstNumber, secondNumber) => {
  for (let i = Math.max(firstNumber, secondNumber); i >= 1; i -= 1) {
    if ((firstNumber % i === 0) && (secondNumber % i === 0)) {
      return String(i);
    }
  }
  return '1';
};

export const isEven = (number) => number % 2 === 0;
