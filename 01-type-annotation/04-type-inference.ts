/*
 * DEMONSTRATING TYPE INFERENCE IN TYPESCRIPT
 * Shows how TypeScript automatically infers types from initial values
*/

// TypeScript infers 'string' type from initial value
let learningTech = "TypeScript";  
console.log(learningTech);                              // Output: "TypeScript"
console.log(typeof learningTech);                       // Output: "string" (runtime check)


// TypeScript infers 'number' type from initial value
let favNumber = 5;                      
console.log(favNumber);                                 // Output: 5
console.log(typeof favNumber);                          // Output: "number" (runtime check)


// TypeScript infers 'boolean' type from initial value
let isTrue = true;                      
console.log(isTrue);                                    // Output: true
console.log(typeof isTrue);                             // Output: "boolean" (runtime check)


/* 
 * TYPE SAFETY DEMONSTRATION - INVALID REASSIGNMENTS
 * These examples show TypeScript preventing type mismatches
*/

// learningTech = false;                                // ❌ Error: Type 'boolean' is not assignable to type 'string'
// favNumber = "true";                                  // ❌ Error: Type 'string' is not assignable to type 'number'
// isTrue = 100;                                        // ❌ Error: Type 'number' is not assignable to type 'boolean'


// Additional type inference examples:
const inferredArray = [1, 2, 3];                        // TypeScript infers number[]
const inferredObject = {                                // TypeScript infers { name: string, age: number }
    name: "Alice",
    age: 30
};

console.log("\nAdvanced type inference examples:");
console.log(inferredArray);                             // Output: [1, 2, 3]
console.log(inferredObject);                            // Output: { name: "Alice", age: 30 }