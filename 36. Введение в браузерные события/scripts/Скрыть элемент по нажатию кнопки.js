//Добавьте JavaScript к кнопке button, чтобы при нажатии элемент <div id="text"> исчезал.

hider.addEventListener("click", handlerEvent);
function handlerEvent(e) {
  console.log(text.style.display);
  text.style.display = "none";
}
