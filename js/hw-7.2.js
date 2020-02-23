const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы"
];

const products = document.querySelector("#ingredients");

const itemList = array =>
  array.map(e => {
    const item = document.createElement("li");
    item.textContent = e;
    return item;
  });

const ingredientsItem = itemList(ingredients);

products.append(...ingredientsItem);
