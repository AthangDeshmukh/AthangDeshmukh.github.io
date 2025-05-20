const customers = [
  { cart: "1234567890", pin: "1234", name: "John", balance: 1000 },
  { cart: "1234567891", pin: "2345", name: "Cathy", balance: 500 },
];

let currentUser = null;

document.querySelector("form").onsubmit = function (e) {
  e.preventDefault();
  const cart = document.getElementById("cart").value.trim();
  const pin = document.getElementById("pin").value.trim();

  currentUser = customers.find(c => c.cart === cart && c.pin === pin);

  if (currentUser) {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("atm-actions").style.display = "block";
    document.getElementById("user-name").textContent = `Welcome, ${currentUser.name}!`;
    document.getElementById("balance").textContent = `Balance: ₹${currentUser.balance}`;
  } else {
    alert("Invalid card or PIN");
  }
};

document.getElementById("do-action").onclick = function () {
  const action = document.getElementById("action-select").value;
  const amount = parseFloat(document.getElementById("amount").value);

  if (!action || isNaN(amount) || amount <= 0) {
    alert("Please select a valid action and amount.");
    return;
  }

  if (action === "withdraw") {
    if (amount > currentUser.balance) {
      alert("Insufficient balance.");
      return;
    }
    currentUser.balance -= amount;
  } else if (action === "deposit") {
    currentUser.balance += amount;
  }

  document.getElementById("balance").textContent = `Balance: ₹${currentUser.balance}`;
  alert(`${action === "deposit" ? "Deposited" : "Withdrawn"} ₹${amount} successfully.`);
  document.getElementById("amount").value = ""; // clear input
};
