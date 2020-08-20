// У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.

// Создайте функцию copySorted(arr), которая будет возвращать такую копию.

let arr = ["HTML", "JavaScript", "CSS"];

function compare(a, b) {
  if (a < b) return -1;
  if (a === b) return 0;
  if (a > b) return 1;
}

function copySorted(arr) {
  return arr.slice().sort(compare);
}

let sorted = copySorted(arr);

console.log(sorted); // CSS, HTML, JavaScript
console.log(arr); // HTML, JavaScript, CSS (без изменений)
