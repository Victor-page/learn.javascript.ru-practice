// ball.offsetWidth=0 до того, как изображение загрузилось!
// исправим это, установив ширину:

// ball.style.left = field.clientWidth / 2 - ball.offsetWidth / 2 + "px";
// ball.style.top = field.clientHeight / 2 - ball.offsetHeight / 2 + "px";

ball.style.left =
  Math.round(field.clientWidth / 2 - ball.offsetWidth / 2) + "px";
ball.style.top =
  Math.round(field.clientHeight / 2 - ball.offsetHeight / 2) + "px";
