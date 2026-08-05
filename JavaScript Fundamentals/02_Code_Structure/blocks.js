if(true){
    let blockScoped = "I'm inside the block";
    console.log(blockScoped);
}


// console.log(blockScoped); // This will throw an error because blockScoped is not accessible outside the block


for (let i = 0; i < 3; i++){
    console.log("loop iteration: " + i);
}


let sum =
    1 +
    2 +
    3;
console.log(sum); // Outputs: 6


// Best Practices:

/*  
Use consistent indentation (usually 2 or 4 spaces) to show code structure.
Keep lines at a reasonable length (often 80-120 characters) for readability.
Use meaningful variable and function names.
Add comments to explain complex parts of your code, but remember that clear code often speaks for itself.
*/