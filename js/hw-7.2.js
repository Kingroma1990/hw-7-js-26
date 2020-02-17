const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы"
];

const items = ingredients.map(e => {
  const products = document.querySelector("#ingredients");
  const li = document.createElement("li");
  li.textContent = e;
  products.append(li);
  return li;
});
