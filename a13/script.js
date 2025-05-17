let fruits = [
  { id: 1, name: "Apple", price: 2 ,qty : 2, status : "pending" },
  { id: 2, name: "Orange", price: 3, qty : 2,status : "pending"  },
  { id: 3, name: "Mango", price: 4 ,qty : 2, status : "pending" },
];

let updatedFruits = fruits.map(element => ({...element , total : element.price * element.qty , status : "completed" , }));
 

updatedFruits.forEach(element => {
  console.log(element.name+" "+element.total);
})
 
let completedFruits = updatedFruits.filter(fruit => fruit.status === "completed");
console.log(completedFruits);
 
completedFruits.map(fruit => {
  console.log(fruit.name + " " + fruit.total);
});

