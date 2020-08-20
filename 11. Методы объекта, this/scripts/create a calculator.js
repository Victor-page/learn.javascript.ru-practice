//Создайте объект calculator (калькулятор) с тремя методами:

//read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
//sum() (суммировать) возвращает сумму сохранённых значений.
//mul() (умножить) перемножает сохранённые значения и возвращает результат.

let calculator = {
  read: function (firstValue, secondValue) {
    this.firstValue = firstValue;
    this.secondValue = secondValue;
  },
  sum: function () {
    return this.firstValue + this.secondValue;
  },
  mul: function () {
    return this.firstValue * this.secondValue;
  },
};

calculator.read(10, 5);
console.log(calculator.sum());
console.log(calculator.mul());
