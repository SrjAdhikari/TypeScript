/*
 * DEMONSTRATING THE 'any' TYPE IN TYPESCRIPT
 * Shows how the 'any' type allows dynamic typing (opt-out of type checking)
 * Useful for gradual migration from JavaScript but should be used sparingly
*/

// Declare a variable with 'any' type - opt-out of type checking
let value: any = 10;                                                // Initially assigned a number
console.log(`Initial number value: ${value}`);                      // Output: 10
console.log(`Type: ${typeof value}`);                               // Output: "number"


// Reassign to different types - all allowed with 'any'
value = "Ten";                                                      // Changed to string
console.log(`String value: ${value}`);                              // Output: "Ten"
console.log(`Type: ${typeof value}`);                               // Output: "string"


value = true;                                                       // Changed to boolean
console.log(`Boolean value: ${value}`);                             // Output: true
console.log(`Type: ${typeof value}`);                               // Output: "boolean"


value = [1, 2, 3];                                                  // Changed to array
console.log(`Array value: ${value}`);                               // Output: "1,2,3"
console.log(`Type: ${typeof value}`);                               // Output: "object"
console.log(`Is array? ${Array.isArray(value)}`);                   // Output: true


/* 
 * WARNING: PROPER USAGE OF 'any'
 * While 'any' provides flexibility, it sacrifices TypeScript's benefits:
 * 1. No type safety
 * 2. No code completion/intellisense
 * 3. No compile-time error checking

 * Preferred alternatives:
 * - 'unknown' type for type-safe dynamic values
 * - Union types when multiple types are possible
 * - Proper type definitions when possible
*/

// Example of better alternative using union type:
// Still allows multiple types but with type checking
let saferValue: number | string | boolean | number[] = 10;