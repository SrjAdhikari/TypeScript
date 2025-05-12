/*
 * DEMONSTRATING STRING TYPE ANNOTATIONS IN TYPESCRIPT
 * This code shows simple string variable declarations and type safety
*/

// Declare and initialize a string variable with type annotation
let myName: string = "Suraj";
console.log(myName);                            // Output: "Suraj"


// Declare a string variable first, then assign value later
let greeting: string;
greeting = "Hello Everyone!";
console.log(greeting);                          // Output: "Hello Everyone!"


/* 
 * TYPE SAFETY DEMONSTRATION
 * These lines show what would happen if we try to assign wrong types
*/

// myName = 12;                                 // ❌ Error: Type 'number' is not assignable to type 'string'
// greeting = true;                             // ❌ Error: Type 'boolean' is not assignable to type 'string'