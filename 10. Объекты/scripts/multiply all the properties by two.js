//Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

// до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

multiplyNumeric(menu);

// после вызова функции
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu",
// };
//Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.

//P.S. Используйте typeof для проверки, что значение свойства числовое.

function multiplyNumeric(obj) {
  for (let valueOfProperty in obj) {
    if (typeof obj[valueOfProperty] === "number") {
      obj[valueOfProperty] = obj[valueOfProperty] * 2;
    }
  }
}

console.log(menu);
