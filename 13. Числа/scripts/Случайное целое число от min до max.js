// Напишите функцию randomInteger(min, max), которая генерирует случайное целое (integer) число от min до max (включительно).

// Любое число из интервала min..max должно появляться с одинаковой вероятностью.

function randomInteger(min, max) {
  let i = Math.random() * max;
  while (!(i >= min && i < max)) {
    i = Math.random() * max;
  }
  return Math.round(i);
}

console.log(randomInteger(1, 5)); // 1
console.log(randomInteger(1, 5)); // 3
console.log(randomInteger(1, 5)); // 5
