const products = [
    { id: 1, name: "Product 1", price: 100 },
    { id: 2, name: "Product 2", price: 200 },
    { id: 3, name: "Product 3", price: 300 }
];
const cart = {1: 4, 3: 5};
 
const total = products.reduce((sum, value) =>
    sum + (cart[value.id] ? value.price * cart[value.id] : 0)
, 0);
console.log("Total:", total);           