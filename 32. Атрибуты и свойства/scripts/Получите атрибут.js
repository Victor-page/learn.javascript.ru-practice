//Напишите код для выбора элемента с атрибутом data-widget-name из документа и прочитайте его значение.
const div = document.querySelector("[data-widget-name]");
console.log(div.dataset.widgetName);
