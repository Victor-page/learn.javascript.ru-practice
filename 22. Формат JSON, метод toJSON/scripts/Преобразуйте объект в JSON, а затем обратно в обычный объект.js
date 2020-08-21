//Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.
let user = {
  name: "Василий Иванович",
  age: 35,
};

const json = JSON.stringify(user);
console.log(json);

const anotherVarUser = JSON.parse(json);
console.log(anotherVarUser);
