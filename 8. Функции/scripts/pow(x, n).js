// Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.

// Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).

// P.S. В этой задаче функция обязана поддерживать только натуральные значения n, т.е. целые от 1 и выше.

const x = prompt("Input a number", "");
const n = prompt("Input a pow", "");

function pow(x, n) {
  if (n >= 1) {
    let sum = x;

    for (let i = 1; i < n; i++) {
      sum = sum * x;
    }
    return sum;
  } else {
    alert(`The pow ${n} is not supported, use a positive whole number`);
    n = prompt("Input a positive pow", "");
    return pow(x, n);
  }
}

// console.log(pow(3, 2));
// console.log(pow(3, 3));
// console.log(pow(1, 100));
console.log(pow(x, n));
