//У нас есть объект salaries с зарплатами:

//Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

//Если объект salaries пустой, то нужно вернуть null.
//Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
//P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.
let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};
function topSalary(salaries) {
  const arr = Object.entries(salaries).sort().reverse();
  let [topSalary = null] = arr;
  if (topSalary) {
    return topSalary[0];
  } else {
    return null;
  }
}

console.log(topSalary(salaries));
