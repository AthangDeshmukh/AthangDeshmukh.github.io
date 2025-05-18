// function add(...nums) {
//     let sum = nums.reduce((acc, curr) => acc + curr, 0);
//     console.log("Sum:", sum);
// }
const products = [
    { id: 1, name: "Product 1", price: 100 },
    { id: 2, name: "Product 2", price: 200 },
    { id: 3, name: "Product 3", price: 300 }
];
const cart = {1: 4, 3: 5};

const orderValue = products.reduce((sum, product) => {
    if (cart[product.id]) {
        const qty = cart[product.id];
        const total = product.price * qty;
        console.log(`Name: ${product.name}, Price: ${product.price}, Qty: ${qty}, Total: ${total}`);
        return sum + total;
    }
    return sum;
}, 0);

console.log("Order Value:", orderValue);