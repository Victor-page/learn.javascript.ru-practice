// Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.

// Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:
getSecondsToday() == 36000; // (3600 * 10)

function getSecondsToday() {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  console.log(today);
  console.log(Math.round((now - today) / 1000));
  return Math.round((now - today) / 1000);
}
