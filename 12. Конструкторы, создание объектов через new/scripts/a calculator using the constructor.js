//Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:

//read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
//sum() возвращает сумму введённых свойств.
//mul() возвращает произведение введённых свойств.

function Calculator() {
  this.read = function () {
    this.a = +prompt("a?", "");
    this.b = +prompt("b?", "");
  };
  this.sum = function () {
    return this.a + this.b;
  };
  this.mul = function () {
    return this.a * this.b;
  };
}

let calculator = new Calculator();
calculator.read();

console.log("Sum=" + calculator.sum());
console.log("Mul=" + calculator.mul());
