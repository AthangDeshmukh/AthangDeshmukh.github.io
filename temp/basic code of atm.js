const customers = [
  { cart: "1234567890", pin: "1234", name: "John", balance: 0 },
  { cart: "1234567891", pin: "2345", name: "Cathy", balance: 0 },
];

document.querySelector("form").onsubmit = function(e) {
  e.preventDefault();
  const user = customers.find(
    c => c.cart === cart.value && c.pin === pin.value
  );
  if (user) {
    document.body.innerHTML = `<h1 style="text-align:center;margin-top:80px;">Welcome, ${user.name}!</h1>`;
  } else {
    alert("Invalid card or PIN");
  }
};