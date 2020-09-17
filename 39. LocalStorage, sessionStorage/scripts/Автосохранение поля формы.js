// Создайте поле textarea, значение которого будет автоматически сохраняться при каждом его изменении.

// Когда пользователь закроет страницу и потом откроет её заново он должен увидеть последнее введённое значение.

area.value = localStorage.getItem("area");

area.addEventListener("input", inputHandler);

function inputHandler(e) {
  localStorage.setItem("area", area.value);
}
