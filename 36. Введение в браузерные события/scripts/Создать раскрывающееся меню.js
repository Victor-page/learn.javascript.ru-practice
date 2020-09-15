// Создать меню, которое по нажатию открывается либо закрывается:

const menuElement = document.querySelector("#sweeties");
const titleElement = menuElement.querySelector(".title");

titleElement.onclick = function () {
  menuElement.classList.toggle("open");
};
