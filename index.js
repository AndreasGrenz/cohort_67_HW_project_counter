const resultElement = document.getElementById("result");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");

let counter = 0;

function updateCounter() {
  resultElement.textContent = counter;
}

incrementBtn.addEventListener("click", function () {
  counter++;
  updateCounter();
});

decrementBtn.addEventListener("click", function () {
  counter--;
  updateCounter();
});