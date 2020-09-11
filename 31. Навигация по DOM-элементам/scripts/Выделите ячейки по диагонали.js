//Напишите код, который выделит красным цветом все ячейки в таблице по диагонали.

//Вам нужно получить из таблицы <table> все диагональные <td> и выделить их, используя код:
//  в переменной td находится DOM-элемент для тега <td>

//td.style.backgroundColor = "red";
const table = document.body.children[2];

for (let i = 0; i < table.rows.length; i++) {
  let row = table.rows[i];
  console.log(row.cells);
  row.cells[i].style.backgroundColor = "red";
}
