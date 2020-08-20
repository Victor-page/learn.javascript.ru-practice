// Пусть arr – массив строк.

// Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.
function unique(arr) {
  let changedArr = [];
  arr.map(function (item, index, array) {
    if (!changedArr.includes(item)) {
      changedArr.push(item);
    }
  });
  console.log(changedArr);

  return changedArr;
}

let strings = [
  "кришна",
  "кришна",
  "харе",
  "харе",
  "харе",
  "харе",
  "кришна",
  "кришна",
  ":-O",
];

unique(strings); // кришна, харе, :-O
