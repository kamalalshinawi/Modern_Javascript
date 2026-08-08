function greetWithDefault(name = "Guest") {
    console.log("Welcome, " + name + "!");
}

greetWithDefault();        // Welcome, Guest!
greetWithDefault("David"); // Welcome, David!






function noReturn() {
    console.log("This function doesn't return anything");
}

let result = noReturn();
console.log(result); // Outputs: undefined






let globalVar = "I'm global";

function scopeExample() {
    let localVar = "I'm local";
    console.log(globalVar);  // I'm global
    console.log(localVar);   // I'm local
}

scopeExample();
console.log(globalVar);  // I'm global
console.log(localVar);   // Throws an error: localVar is not defined



let square = x => x * x;

console.log(square(4)); // Outputs: 16