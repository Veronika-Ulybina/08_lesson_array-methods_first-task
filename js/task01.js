'use strict';

const getRandomNumbers = (count) => {
  const arr = [];

  for (let i = 0; i < count; i++) {
    arr.push(Math.ceil(Math.random() * 100));
  }
  return arr;
}

console.log(getRandomNumbers(7));
