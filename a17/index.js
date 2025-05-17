function add(x, y) {
  return Promise.resolve(x + y);
}
async function sqr(a) {
    return a*a;
}
async function main(){
    let sum-await add(5, 10);
    let result = await sqr(sum);
    console.log(result);
    
}
main();