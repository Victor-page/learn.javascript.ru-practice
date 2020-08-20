// Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.

// Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.

function extractCurrencyValue(str) {
  console.log(Number(str.slice(1)));

  return Number(str.slice(1));
}

console.log(extractCurrencyValue("$120") === 120);
