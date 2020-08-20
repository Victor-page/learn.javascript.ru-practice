// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
// Должно работать так:

let schedule = {};

console.log(isEmpty(schedule)); // true

schedule["8:30"] = "get up";

console.log(isEmpty(schedule)); // false

function isEmpty(obj) {
  for (let key in obj) {
    if (obj.key === undefined) {
      return false;
    }
  }
  return true;
}
