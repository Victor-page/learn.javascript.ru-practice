//В Европейских странах неделя начинается с понедельника (день номер 1), затем идёт вторник (номер 2) и так до воскресенья (номер 7). Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date.
function getLocalDay(date) {
  let weekDay = date.getDay();
  if (weekDay === 0) {
    weekDay = 7;
  }
  return weekDay;
}
let date = new Date(2012, 0, 3); // 3 января 2012 года
console.log(getLocalDay(date)); // вторник, нужно показать 2
