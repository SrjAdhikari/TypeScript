/*
 * DEMONSTRATING NUMBER TYPE ANNOTATIONS IN TYPESCRIPT
 * Shows how to work with both integer and floating-point numbers
*/

// Declare and initialize an integer number
let myNumber: number = 50;
console.log(myNumber);                                  // Output: 50


// Declare a number variable first, then assign value later
let secondNum: number;
secondNum = 100;
console.log(secondNum);                                 // Output: 100


// Declare and initialize a floating-point number
let otherNumber: number = 3.56;
console.log(otherNumber);                               // Output: 3.56


/* 
 * TYPE SAFETY DEMONSTRATION
 * These lines show what would happen if we try to assign wrong types
*/

// myNumber = "Four";                                   // ❌ Error: Type 'string' is not assignable to type 'number'
// otherNumber = false;                                 // ❌ Error: Type 'boolean' is not assignable to type 'number'


// Additional valid number examples:
const hexNumber: number = 0xf00d;                       // Hexadecimal
const binaryNumber: number = 0b1010;                    // Binary
const octalNumber: number = 0o744;                      // Octal
const bigNumber: number = 1_000_000;                    // Numeric separator (ES2021)


console.log("Special number formats:");
console.log(hexNumber);                                 // Output: 61453
console.log(binaryNumber);                              // Output: 10
console.log(octalNumber);                               // Output: 484
console.log(bigNumber);                                 // Output: 1000000