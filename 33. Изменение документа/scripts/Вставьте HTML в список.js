//Напишите код для вставки <li>2</li><li>3</li> между этими двумя <li>:

const one = document.querySelector("#one");
one.insertAdjacentHTML("afterend", "<li>2</li><li>3</li>");

//Когда нам необходимо вставить фрагмент HTML-кода, можно использовать insertAdjacentHTML, он лучше всего подходит для таких задач.
