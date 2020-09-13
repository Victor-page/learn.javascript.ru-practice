// Напишите функцию createTree, которая создаёт вложенный список ul/li из объекта.
let data = {
  Рыбы: {
    форель: {},
    лосось: {},
  },

  Деревья: {
    Огромные: {
      секвойя: {},
      дуб: {},
    },
    Цветковые: {
      яблоня: {},
      магнолия: {},
    },
  },
};

function createTree(container, obj) {
  container.append(createTreeDom(obj));
}

function createTreeDom(obj) {
  if (Object.keys(obj).length === 0) return;

  let ul = document.createElement("ul");

  for (let key in obj) {
    let li = document.createElement("li");
    li.textContent = key;

    let childrenUl = createTreeDom(obj[key]);
    if (childrenUl) {
      li.append(childrenUl);
    }

    ul.append(li);
  }

  return ul;
}

let container = document.getElementById("tree");
createTree(container, data);
console.log(container);
