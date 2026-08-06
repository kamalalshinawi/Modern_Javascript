'use strict';

// x=3.14; This will cause an error
let x = 3.14;  // This works in strict mode
console.log(x);



// Benefits of Using Strict Mode

//     Prevents accidental globals: Without strict mode, assigning a value to an undeclared variable creates a global variable. Strict mode throws an error instead.
//     Eliminates silent errors: Some developer errors that are silently ignored in non-strict mode will generate errors in strict mode.
//     Improves performance: In some cases, strict mode code can be optimized to run faster than identical code not in strict mode.
//     Prohibits some unsafe features: Strict mode throws errors when certain unsafe actions are taken, like deleting a variable.


function strictFunction() {
    'use strict';
    let y = 10; // This is allowed in strict mode
    // z = 20; that's not allowed in strict mode
    return y;
}

console.log(strictFunction())