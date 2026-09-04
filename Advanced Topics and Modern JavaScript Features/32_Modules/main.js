import { add, subtract } from "./utils.js";
// import * as mathUtils from './mathUtils.js';

console.log(add(5, 3)); // Output: 8
console.log(subtract(5, 3)); // Output: 2
let result = add(10, 5);
let result2 = subtract(10, 5);
const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");
div1.innerHTML = `
    result of add(10, 5) is: ${result}
`;

div2.innerHTML = `
    result of subtract(10, 5) is: ${result2}
`;



// console.log(mathUtils.add(5, 3));      // 8
// console.log(mathUtils.multiply(4, 2)); // 8
