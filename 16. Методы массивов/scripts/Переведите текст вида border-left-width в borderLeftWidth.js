// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

// То есть дефисы удаляются, а все слова после них получают заглавную букву.

//P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратно.

function camelize(str) {
  const split = str.split("-");
  //console.log(split);

  return split
    .map((word, index) =>
      index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join("");
}

camelize("background-color");
camelize("list-style-image");
camelize("-webkit-transition");
console.log(camelize("list-style-image"));
