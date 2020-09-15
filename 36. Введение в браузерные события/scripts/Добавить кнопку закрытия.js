const panes = document.querySelectorAll(".pane");
console.log(panes);
for (let pane of panes) {
  pane.insertAdjacentHTML(
    "afterbegin",
    `<button class="remove-button">[x]</button>`
  );
  console.log(pane.firstChild);
  pane.firstChild.onclick = () => pane.remove();
}
