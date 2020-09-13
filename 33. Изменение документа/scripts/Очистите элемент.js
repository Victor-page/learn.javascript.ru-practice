//Создайте функцию clear(elem), которая удаляет всё содержимое из elem.
const ol = document.querySelector("#elem");
function clear(elem) {
  /* ваш код */
  elem.innerHTML = "";
}

clear(ol); // очищает список
