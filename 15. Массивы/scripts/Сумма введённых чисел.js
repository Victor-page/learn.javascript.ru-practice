// Напишите функцию sumInput(), которая:

// Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
// P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».

function sumInput() {
  let values = [];
  let value;
  let sum = 0;
  do {
    value = prompt("Enter a Value", "");
    if (!isFinite(value) || value === "" || value === null) {
      console.log(value);
      return;
    } else {
      sum = sum + Number(value);
      console.log(sum);

      values.push(+value);
      console.log(values);
    }
  } while (isFinite(value));
}
sumInput();
