// Дан список сообщений с кнопками для удаления [x]. Заставьте кнопки работать.

container.addEventListener('click', handler);

function handler(e) {
  console.log(e.target);
  if (e.target.className !== 'remove-button') return;

  const pane = e.target.closest('.pane');
  pane.remove();
}
