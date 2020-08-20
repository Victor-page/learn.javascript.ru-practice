// Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.

// Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.

// Если объект salaries пуст, то результат должен быть 0.
function sumSalaries(salaries) {
  let sum = 0;
  const salariesArr = Object.values(salaries);
  for (let salary of salariesArr) {
    sum += salary;
  }
  console.log(sum);
  return sum;
}

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

sumSalaries(salaries); // 650
