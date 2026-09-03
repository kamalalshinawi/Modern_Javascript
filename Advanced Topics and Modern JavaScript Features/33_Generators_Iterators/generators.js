// These are all iterable
const array = [1, 2, 3];
const string = "hello";
const set = new Set([1, 2, 3]);
const map = new Map([['a', 1], ['b', 2]]);

// They all work with for...of
for (const item of array) console.log(item);
for (const char of string) console.log(char);
for (const item of set) console.log(item);
for (const [key, value] of map) console.log(key, value);
console.log("--------------------------------------------------");
console.log(map)