let arr = [5, 2, 233, 1, -10, 8];

// function compare(a, b) {
//   if (a > b) return -1;
//   if (a == b) return 0;
//   if (a < b) return 1;
// }

arr.sort((a, b) => b - a);

console.log(arr); // 8, 5, 2, 1, -10
