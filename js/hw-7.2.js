const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы"
];

const products = document.querySelector("#ingredients");

const itemList = function(array) {
  const items = [];
  array.map(e => {
    const item = document.createElement("li");
    item.textContent = e;
    items.push(item);
  });
  return items;
};

const ingredientsItem = itemList(ingredients);

products.append(...ingredientsItem);
