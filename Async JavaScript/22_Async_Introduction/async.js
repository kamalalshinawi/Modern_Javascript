let testAsync = () => {
  let timeNow = Date.now();
  while (Date.now() - timeNow < 5000) {}
  return `will print this after loop 5 second `;
};

console.log("start the program");
console.log(testAsync()); // will freeze here for 5 second
console.log(`end the program`);

//  this is how setTimeout work in Async

console.log("start program");

let asyncFun = (data) => {
  console.log("the start of the function");

  setTimeout(() => {
    console.log(`this is Async code ? ${data} `);
  }, 10000);
};
asyncFun(`true`);
console.log(`this Ending of Program`);
