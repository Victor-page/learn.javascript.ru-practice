//Встроенный метод Math.random() возвращает случайное число от 0 (включительно) до 1 (но не включая 1)

//Напишите функцию random(min, max), которая генерирует случайное число с плавающей точкой от min до max (но не включая max).

function random(min, max) {
  let i = Math.random() * max;
  while (!(i >= min && i < max)) {
    i = Math.random() * max;
  }
  return i;
}

console.log(random(1, 5)); // 1.2345623452
console.log(random(1, 5)); // 3.7894332423
console.log(random(1, 5)); // 4.3435234525
