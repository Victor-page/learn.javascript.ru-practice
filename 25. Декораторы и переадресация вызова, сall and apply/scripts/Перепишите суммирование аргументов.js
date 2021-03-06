//Есть функция sum, которая суммирует все элементы массива:
// function sum(arr) {
//   return arr.reduce(function (a, b) {
//     return a + b;
//   });
// }
// alert(sum([1, 2, 3])); // 6 (=1+2+3)
// Создайте аналогичную функцию sumArgs(), которая будет суммировать все свои аргументы:
function sumArgs() {
  const args = [].slice.call(arguments);
  return args.reduce(function (a, b) {
    return a + b;
  });
}

console.log(sumArgs(1, 2, 3)); // 6, аргументы переданы через запятую, без массива
