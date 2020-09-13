// Сделайте все внешние ссылки оранжевыми, изменяя их свойство style.

// Ссылка является внешней, если:

// Её href содержит ://
// Но не начинается с http://internal.com.

const links = document.querySelectorAll("a");
console.log(links);

for (let link of links) {
  const href = link.getAttribute("href");
  console.log(link.href);
  if (!href) continue;
  if (!href.includes("://")) continue;
  if (href.startsWith("http://internal.com")) continue;

  link.style.color = "orange";
}
