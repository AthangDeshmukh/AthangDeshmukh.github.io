const fruits = ["Apple", "Orange", "Banana", "Berries", "Pineapple", "Grapes"];

function searchFruit() {
  const input = document.getElementById("fruit-input").value.trim().toLowerCase();
  const result = fruits.filter(fruit => fruit.toLowerCase() === input);

  const resultBox = document.getElementById("result-box");

  if (result.length > 0) {
    resultBox.textContent = "Result: " + result[0];
    resultBox.style.color = "green";
  } else {
    resultBox.textContent = "Result: Not Available";
    resultBox.style.color = "crimson";
    resultBox.style.fontFamily = "arial";
    resultBox.style.textDecoration = "underline";
  }
}