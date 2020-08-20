//Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:
function ucFirst(str) {
  const changedStr = str.slice(0, 1).toUpperCase() + str.slice(1);
  return changedStr;
}

console.log(ucFirst("вася"));
console.log(ucFirst("вася") === "Вася");
