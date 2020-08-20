// Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.

// Многократные прогоны через shuffle могут привести к разным последовательностям элементов.

//Все последовательности элементов должны иметь одинаковую вероятность. Например, [1,2,3] может быть переупорядочено как [1,2,3] или [1,3,2], или [3,1,2] и т.д., с равной вероятностью каждого случая.
function shuffle(array) {
  array.sort(function (a, b) {
    return (a *= Math.random().toFixed()) - (b *= Math.random().toFixed());
  });
}
let arr = [1, 2, 3];
shuffle(arr);
// console.log(arr);

let count = {
  "123": 0,
  "132": 0,
  "213": 0,
  "231": 0,
  "321": 0,
  "312": 0,
};

for (let i = 0; i < 1000000; i++) {
  let array = [1, 2, 3];
  shuffle(array);
  count[array.join("")]++;
}

// показать количество всех возможных вариантов
for (let key in count) {
  console.log(`${key}: ${count[key]}`);
}

// function shuffle(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//       let j = Math.floor(Math.random() * (i + 1));
//       [array[i], array[j]] = [array[j], array[i]];
//     }
//   }
