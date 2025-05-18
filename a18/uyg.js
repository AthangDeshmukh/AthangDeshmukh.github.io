function add(...nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    console.log("Sum:", sum);
}

add(5, 6, 7, 8, 9, 5);