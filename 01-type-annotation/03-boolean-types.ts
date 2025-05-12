/*
 * DEMONSTRATING BOOLEAN TYPE ANNOTATIONS IN TYPESCRIPT
 * Shows proper boolean usage and type safety in conditional logic
*/

// Declare and initialize a boolean for authentication status
let isAuth: boolean = true;

// Using boolean in conditional statement
if (isAuth) {
    console.log("User is authenticated");
}


// Declare and initialize a boolean for difficulty assessment
let isTSHard: boolean = false;

// Using boolean with negation in conditional
if (!isTSHard) {
    console.log("TypeScript is not really hard.");
}


/* 
 * TYPE SAFETY DEMONSTRATION - INVALID ASSIGNMENTS
 * These lines show what would happen if we try to assign wrong types
*/

// isAuth = 10;                                         // ❌ Error: Type 'number' is not assignable to type 'boolean'
// isTSHard = "No";                                     // ❌ Error: Type 'string' is not assignable to type 'boolean'


// Additional boolean examples:
const hasPermission: boolean = Boolean(1);              // Truthy conversion
const isEmpty: boolean = Boolean("");                   // Falsy conversion


console.log("\nAdditional boolean conversions:");
console.log(`hasPermission: ${hasPermission}`);         // Output: true
console.log(`isEmpty: ${isEmpty}`);                     // Output: false