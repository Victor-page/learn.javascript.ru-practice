// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.

// Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.

function truncate(str, maxlength) {
  // console.log(str.slice(0, maxlength));
  if (str.length > maxlength) {
    str = str.slice(0, maxlength - 1) + "…";
    console.log(str);

    return str;
  }
  console.log(str);
  return str;
}

truncate("Вот, что мне хотелось бы сказать на эту тему:", 20);

truncate("Всем привет!", 20);
