//Создайте кнопку, которая будет скрывать себя по нажатию.
hider.addEventListener("click", handlerEvent);
function handlerEvent(e) {
  //  hider.style.display = "none";
  console.log(this.hidden);
  this.hidden = true;
  console.log(this.hidden);
}
