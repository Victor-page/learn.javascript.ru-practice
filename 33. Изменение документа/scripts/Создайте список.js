// Напишите интерфейс для создания списка.

// Для каждого пункта:

// Запрашивайте содержимое пункта у пользователя с помощью prompt.
// Создавайте элемент <li> и добавляйте его к <ul>.
// Процесс прерывается, когда пользователь нажимает Esc или вводит пустую строку.
// Все элементы должны создаваться динамически.

// Если пользователь вводит HTML-теги -– пусть в списке они показываются как обычный текст.
const ul = document.createElement("ul");
document.body.append(ul);

while (true) {
  const data = prompt("Enter the text for the list element", "");
  if (data === "" || data === null) {
    break;
  }
  const li = document.createElement("li");
  li.textContent = data;
  ul.append(li);
}
