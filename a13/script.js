const products = [
  { name: "Product 1", price: 34 },
  { name: "Product 2", price: 56 },
  { name: "Product 3", price: 40 }
];

// Using spread operator to create a new array (copy)
const productsCopy = [...products];

const total = productsCopy.reduce((sum, p) => sum + p.price, 0);

console.log("Total Price:", total);

document.body.insertAdjacentHTML('beforeend', `<h2>Total Price: $${total}</h2>`);