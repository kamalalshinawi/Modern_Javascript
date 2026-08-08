let fruits = ['apple', 'banana', 'orange', 'grape'];

// Basic forward iteration
for (let i = 0; i < fruits.length; i++) {
    console.log(`Fruit ${i + 1}: ${fruits[i]}`);
}

// Backward iteration
for (let i = fruits.length - 1; i >= 0; i--) {
    console.log(`Fruit ${i + 1}: ${fruits[i]}`);
}

// Skipping elements (every second element)
for (let i = 0; i < fruits.length; i += 2) {
    console.log(`Fruit ${i + 1}: ${fruits[i]}`);
}




let numbers = [1, 2, 3, 4, 5];

// Breaking out of a loop
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 3) {
        break;
    }
    console.log(numbers[i]);
} // Outputs: 1, 2

// Skipping elements with continue
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        continue;
    }
    console.log(numbers[i]);
} // Outputs: 1, 3, 5

// Modifying array elements
for (let i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i] * 2;
}
console.log(numbers); // [2, 4, 6, 8, 10]






let colors = ['red', 'green', 'blue'];

let i = 0;
while (i < colors.length) {
    console.log(colors[i]);
    i++;
}

// Another pattern using while
let j = colors.length;
while (j--) {
    console.log(colors[j]);
}




let numbers = [1, 2, 3, 4, 5];

for (let number of numbers) {
    console.log(number);
}

// Note: You can't easily access the index in for...of
// If you need both element and index, use for loop or forEach



let numbers = [1, 2, 3, 4, 5];
let searchValue = 3;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === searchValue) {
        console.log(`Found ${searchValue} at index ${i}`);
        break;
    }
}


let prices = [10, 20, 30, 40];

// Adding tax to each price
for (let i = 0; i < prices.length; i++) {
    prices[i] = prices[i] * 1.2; // Adding 20% tax
}

console.log(price)




let scores = [75, 90, 85, 65, 95];
let highScores = [];

for (let i = 0; i < scores.length; i++) {
    if (scores[i] >= 90) {
        highScores.push(scores[i]);
    }
}

console.log(highScores)




let largeArray = new Array(1000000).fill(1);

// Caching the length can improve performance in very large arrays
let len = largeArray.length;
for (let i = 0; i < len; i++) {
    // Operation
}

// Versus recalculating length each time
for (let i = 0; i < largeArray.length; i++) {
    // Operation
}