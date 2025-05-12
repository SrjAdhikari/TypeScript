/*
 * DEMONSTRATING THE 'unknown' TYPE IN TYPESCRIPT
 * Shows how 'unknown' provides type-safe dynamic typing
 * Requires type checking before operations (safer alternative to 'any')
*/

// Declare a variable with 'unknown' type - starts with no specific type
let data: unknown;
console.log('Initial data:', data);                                         // Output: undefined
console.log('Initial type:', typeof data);                                  // Output: "undefined"


// Can assign any value (like 'any'), but can't use it without type checking
data = 10;                                                                  // Now holds a number
console.log('\nAfter number assignment:');
console.log('Value:', data);                                                // Output: 10
console.log('Type:', typeof data);                                          // Output: "number"


data = "Suraj";                                                             // Now holds a string
console.log('\nAfter string assignment:');
console.log('Value:', data);                                                // Output: "Suraj"
console.log('Type:', typeof data);                                          // Output: "string"


data = [1, 2, 3];                                                           // Now holds an array
console.log('\nAfter array assignment:');
console.log('Value:', data);                                                // Output: [1, 2, 3]
console.log('Type:', typeof data);                                          // Output: "object"
console.log('Is array?', Array.isArray(data));                              // Output: true


/* 
 * TYPE-SAFE USAGE DEMONSTRATION
 * Must use type guards before performing operations
*/

if (typeof data === "string") {
    console.log('\nString operations:');
    console.log('Uppercase:', data.toUpperCase());                          // Safe string operation
    console.log('Length:', data.length);
} 
else if (Array.isArray(data)) {
    console.log('\nArray operations:');
    console.log('First item:', data[0]);                                    // Safe array access
    console.log('Joined:', data.join(' - '));
} 
else {
    console.log('\nType not handled:', typeof data);
}


/* 
 * COMPARISON WITH 'any' TYPE
 * Key differences:
 * 1. 'unknown' requires type checking before use
 * 2. 'any' allows any operation without checks
 * 3. 'unknown' maintains type safety

 * When to use:
 * - Prefer 'unknown' over 'any' for better type safety
 * - Use when type isn't known until runtime (API responses, user input, etc.)
*/

// Example: Safe parsing of JSON data
function safeParse(jsonString: string): unknown {
    return JSON.parse(jsonString);
}

const userData = safeParse('{"name":"Suraj","age":25}');
if (userData && typeof userData === "object" && "name" in userData) {
    console.log('\nParsed user name:', userData.name);
}