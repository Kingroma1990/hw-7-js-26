const categories = document.querySelector("#categories");

const result = categories.children.length;
console.log(`В списке ${result} категории`);

const string = [...categories.children]
  .map(e => `${e.children[0].textContent}: ${e.children[1].children.length}`)
  .join("\n");

console.log(string);
