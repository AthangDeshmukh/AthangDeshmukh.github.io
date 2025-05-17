
function greet() {
  console.log("Hello World");
}

async function dispData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);
  greet(); // Call greet after data is fetched and printed
}

dispData();