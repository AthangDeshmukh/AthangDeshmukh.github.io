// Get fruits from localStorage or initialize default ones
let fruits = JSON.parse(localStorage.getItem('fruits')) || [
  { id: 1, name: "Apple", price: 250, img: "https://png.pngtree.com/png-clipart/20240814/original/pngtree-apple-png-image_15769505.png", qty: 1 },
  { id: 2, name: "Orange", price: 230, img: "https://www.dole.com/sites/default/files/media/2025-01/oranges.png", qty: 1 },
  { id: 3, name: "Mango", price: 280, img: "https://www.wockhardthospitals.com/wp-content/uploads/2020/05/shutterstock_206262862-1-768x514-1.webp", qty: 1 }
];

// Save fruits to localStorage
const saveFruits = () => {
  localStorage.setItem('fruits', JSON.stringify(fruits));
};

// Render fruits
const renderFruits = () => {
  const container = document.getElementById("fruit-container");
  container.innerHTML = "";

  fruits.forEach(({ id, name, price, img, qty }) => {
    const card = document.createElement("div");
    card.className = "fruit-card";
    card.innerHTML = `
      <img src="${img}" alt="${name}">
      <h3>${name}</h3>
      <p>₹${price}</p>
      <button class="add-btn">Add to Cart</button>
    `;

    card.querySelector(".add-btn").addEventListener("click", () => {
      addToCart({ id, name, price, img, qty });
    });

    container.appendChild(card);
  });
};

// Add fruit manually
const addFruit = () => {
  const id = parseInt(document.getElementById("fruit-id").value.trim());
  const name = document.getElementById("fruit-name").value.trim();
  const price = parseInt(document.getElementById("fruit-price").value.trim());
  const qty = parseInt(document.getElementById("fruit-qty").value.trim());
  const img = document.getElementById("fruit-image").value.trim();

  if (id && name && !isNaN(price) && !isNaN(qty) && img) {
    fruits.push({ id, name, price, qty, img });
    saveFruits();     // Save to localStorage
    renderFruits();   // Re-render
    // Clear form
    document.getElementById("fruit-id").value = "";
    document.getElementById("fruit-name").value = "";
    document.getElementById("fruit-price").value = "";
    document.getElementById("fruit-qty").value = "";
    document.getElementById("fruit-image").value = "";
  } else {
    alert("Please enter all valid fruit details!");
  }
};

// Add to cart (in localStorage)
const addToCart = (fruit) => {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const existing = cart.find(f => f.id === fruit.id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...fruit, qty: 1 });
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${fruit.name} added to cart!`);
};

// Clear Cart Button
document.getElementById('clear-cart-btn').onclick = function () {
  localStorage.removeItem('cart');
  alert('Cart cleared!');
  if (window.location.pathname.includes('cart.html')) {
    window.location.reload();
  }
};

document.getElementById('add-fruit-btn').addEventListener('click', addFruit);

// Initial load
renderFruits();

