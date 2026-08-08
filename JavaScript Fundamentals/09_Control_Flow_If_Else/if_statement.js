let temperature = 25;

if (temperature > 30) {
    console.log("It's a hot day!");
}

console.log("End of program");


let hour = 14;

if (hour < 12) {
    console.log("Good morning!");
} else {
    console.log("Good afternoon!");
}



let score = 85;

if (score >= 90) {
    console.log("A grade");
} else if (score >= 80) {
    console.log("B grade");
} else if (score >= 70) {
    console.log("C grade");
} else {
    console.log("Needs improvement");
}


let num = 15;

if (num > 0) {
    console.log("Number is positive");
    if (num % 2 === 0) {
        console.log("Number is even");
    } else {
        console.log("Number is odd");
    }
} else {
    console.log("Number is zero or negative");
}



let age = 15;
let category = age < 13 ? "Child" : age < 18 ? "Teenager" : "Adult";
console.log("Age category:", category);
