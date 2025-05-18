function add(...nums) {
    let sum = nums.reduce((acc, curr) => acc + curr, 0);
    console.log("Sum:", sum);
}

add(5, 6, 7, 8, 9, 5);