// Напишите JavaScript код, который показывает подсказку над элементом с атрибутом data-tooltip. Значение атрибута должно становиться текстом подсказки.

// Это похоже на задачу Поведение "подсказка", но здесь элементы с подсказками могут быть вложены друг в друга. Показываться должна подсказка на самом глубоко вложенном элементе.

// Только одна подсказка может быть показана в любой момент времени.

let tooltip;

function showToolTip(pointedElem, html) {
  const tooltipElem = document.createElement('div');
  tooltipElem.className = 'tooltip';
  tooltipElem.innerHTML = html;
  document.body.append(tooltipElem);

  const coords = pointedElem.getBoundingClientRect();

  // позиционируем подсказку над центром элемента
  let left =
    coords.left + (pointedElem.offsetWidth - tooltipElem.offsetWidth) / 2;
  if (left < 0) left = 0;

  let top = coords.top - tooltipElem.offsetHeight - 5;
  if (top < 0) {
    top = coords.top + pointedElem.offsetHeight + 5;
  }

  tooltipElem.style.left = `${left}px`;
  tooltipElem.style.top = `${top}px`;

  return tooltipElem;
}

function handleMouseover(event) {
  // важно: быстро движущийся курсор может прыгнуть сразу к дочернему элементу, пропустив родительский
  // так что событие mouseover произойдёт сразу на дочернем элементе.

  const pointedElem = event.target.closest('[data-tooltip]');

  if (!pointedElem) return;

  // показываем подсказку и запоминаем её
  tooltip = showToolTip(pointedElem, pointedElem.dataset.tooltip);
}

function handleMouseout() {
  // возможно такое, что произошло событие mouseout, но мы всё ещё внутри элемента
  // (оно было где-то внутри и всплыло)
  // но в этом случае сразу же последует событие mouseover,
  // то есть подсказка исчезнет и потом снова покажется
  //
  // к счастью, этого не будет видно,
  // так как оба события происходят почти одновременно
  if (tooltip) {
    tooltip.remove();
    tooltip = false;
  }
}

document.addEventListener('mouseover', handleMouseover);
document.addEventListener('mouseout', handleMouseout);
