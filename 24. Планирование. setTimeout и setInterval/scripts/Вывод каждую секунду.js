// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

// Сделайте два варианта решения.

// Используя setInterval.
// Используя рекурсивный setTimeout.

// function printNumbers(from, to) {
//   let timerId = setInterval(function () {
//     console.log(from);
//     if (from === to) {
//       clearInterval(timerId);
//     }
//     from++;
//   }, 1000);
// }

// =============================

function printNumbers(from, to) {
  function tick() {
    console.log(from);
    if (from === to) {
      return;
    }
    from++;
    setTimeout(tick, 1000);
  }
  tick();
}

//=========== чтобы функция запускалась сразу же

// function printNumbers(from, to) {
//   function go() {
//     console.log(from);
//     if (from === to) {
//       clearInterval(timerId);
//     }
//     from++;
//   }

//   go();
//   let timerId = setInterval(go, 1000);
// }

printNumbers(3, 10);
