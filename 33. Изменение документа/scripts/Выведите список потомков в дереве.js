// Есть дерево, организованное в виде вложенных списков ul/li.

// Напишите код, который добавит каждому элементу списка <li> количество вложенных в него элементов. Узлы нижнего уровня, без детей – пропускайте.

const lis = document.querySelectorAll("li");

for (let li of lis) {
  const descendantsCount = li.querySelectorAll("li").length;

  if (descendantsCount === 0) continue;

  li.firstChild.textContent += `[${descendantsCount}]`;
}
