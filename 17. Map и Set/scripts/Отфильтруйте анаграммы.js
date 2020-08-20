//Анаграммы – это слова, у которых те же буквы в том же количестве, но они располагаются в другом порядке.
//Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.
function aclean(arr) {
  const map = new Map();

  console.log(arr);
  for (let word of arr) {
    map.set(word.toLowerCase().split("").sort().join(""), word);
  }
  console.log(map.values());
  console.log(map);
  console.log(Array.from(map.values()));
  return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

aclean(arr); // "nap,teachers,ear" or "PAN,cheaters,era"
