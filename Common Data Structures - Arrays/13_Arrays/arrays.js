// Array literal notation (preferred way)
let fruits = ['apple', 'banana', 'orange'];

// Using the Array constructor (less common)
let numbers = new Array(1, 2, 3, 4, 5);

// Empty array
let empty = [];

// Array with mixed data types
let mixed = ['text', 42, true, null, undefined];

// Array of arrays (nested arrays)
let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

console.log(fruits);  // ['apple', 'banana', 'orange']
console.log(numbers); // [1, 2, 3, 4, 5]
console.log(mixed);   // ['text', 42, true, null, undefined]



let colors = ['red', 'green', 'blue'];
console.log(colors.length); // 3

// Length updates automatically when we modify the array
colors[3] = 'yellow';
console.log(colors.length); // 4



let fruits = ['apple', 'banana', 'orange'];

console.log(fruits[0]); // 'apple'
console.log(fruits[1]); // 'banana'
console.log(fruits[2]); // 'orange'
console.log(fruits[3]); // undefined (index doesn't exist)

// Using negative indices doesn't work like in some other languages
console.log(fruits[-1]); // undefined

// Last element can be accessed using length - 1
console.log(fruits[fruits.length - 1]); // 'orange'



let numbers = [1, 2, 3, 4, 5];

// Changing an element
numbers[0] = 10;
console.log(numbers); // [10, 2, 3, 4, 5]

// Adding a new element at a specific index
numbers[5] = 6;
console.log(numbers); // [10, 2, 3, 4, 5, 6]

// Creating a gap in the array (not recommended)
numbers[7] = 8;
console.log(numbers); // [10, 2, 3, 4, 5, 6, , 8] There's no typo there, it looks empty, because it is empty!


let arr = ['apple', 'banana'];

// Arrays are objects
console.log(typeof arr); // 'object'

// We can check if something is an array
console.log(Array.isArray(arr)); // true

// Arrays can have properties like objects
arr.myProperty = 'test';
console.log(arr.myProperty); // 'test'
// But this is not recommended! Do not use this.



let arr = ['a', 'b', 'c'];
arr['1'] = 'd';  // Same as arr[1] = 'd'
console.log(arr); // ['a', 'd', 'c']



let numbers = [1, 2, 3, 4, 5];
numbers.length = 3;
console.log(numbers); // [1, 2, 3]

numbers.length = 5;
console.log(numbers); // [1, 2, 3, , ,] 2 empty spaces at the end!



let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
console.log(arr1 === arr2); // false (arrays are objects, compared by reference)

let arr3 = arr1;
console.log(arr1 === arr3); // true (same reference)

// This might look confusing for beginners, but arr1 and arr2 are 2 different objects that are living separately in your computers memory. Those values are also 6 separate values that are living in 6 different places in the memory. Values might be representing the same numbers but they are not the same.