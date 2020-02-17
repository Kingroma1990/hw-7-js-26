let counterValue = 0;

const decr = document.querySelector("[data-action='decrement']");
const incr = document.querySelector("[data-action='increment']");

const increment = () => {
  counterValue += 1;
  document.getElementById("value").textContent = counterValue;
};
const decrement = () => {
  counterValue -= 1;
  document.getElementById("value").textContent = counterValue;
};
incr.addEventListener("click", increment);
decr.addEventListener("click", decrement);
