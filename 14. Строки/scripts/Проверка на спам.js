// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.
// Функция должна быть нечувствительна к регистру:

function checkSpam(str) {
  const lowStr = str.toLowerCase();
  console.log(
    lowStr.includes("viagra") || lowStr.includes("XXX".toLowerCase())
  );
}

checkSpam("buy ViAgRA now") == true;
checkSpam("free xxxxx") == true;
checkSpam("innocent rabbit") == false;
