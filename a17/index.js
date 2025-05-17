function add(x, y) {
  return new Promise((resolve, reject) => {
    const sum = x + y;
    if (sum < 5) {
      reject("sum is less than 5");
    } else {
      resolve(sum);
    }
  });
}

async function sqr(a) {
  return a * a;
}

async function main() {
  try {
    let sum = await add(5, 10);
    let result = await sqr(sum);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}

main();