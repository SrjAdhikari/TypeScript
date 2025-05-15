/*
 * DEMONSTRATING TUPLES IN TYPESCRIPT
 * Shows fixed-length arrays with specific types for each position
*/

//* ========================
//* 1. BASIC TUPLE EXAMPLE
//* ========================

/*
 * Person tuple - fixed structure [name, age]
 * @type {[string, number]}
*/

let myTuple: [string, number] = ["Suraj", 22];

console.log(`Name: ${myTuple[0]}`);                         // Output: "Name: Suraj"
console.log(`Age: ${myTuple[1]}`);                          // Output: "Age: 22"


//* ====================================
//* 2. TUPLE DECLARATION AND ASSIGNMENT
//* ====================================

/*
 * Message tuple - [priority, text]
 * @type {[number, string]}
*/

let anotherTuple: [number, string];
anotherTuple = [20, "Hello"];                               // ✅ Valid assignment


//* TypeScript prevents these invalid operations:
// anotherTuple = ["Hello", 20];                            // ❌ Error: Type 'string' is not assignable to type 'number'
// anotherTuple = ["Suraj"];                                // ❌ Error: Source has 1 element(s) but target requires 2

console.log(`Priority: ${anotherTuple[0]}`);                // Output: "Priority: 20"
console.log(`Message: ${anotherTuple[1]}`);                 // Output: "Message: Hello"


//* ========================
//* 3. TUPLE DESTRUCTURING
//* ========================

/*
 * User info tuple - [name, age, isActive]
 * @type {[string, number, boolean]}
*/

let userTuple: [string, number, boolean] = ["Suraj", 20, true];

// Destructuring assignment
let [firstName, userAge, isActive] = userTuple;

console.log('\nDestructured Tuple:');
console.log('Name:', firstName);                            // Output: "Name: Suraj"
console.log('Age:', userAge);                               // Output: "Age: 20"
console.log('Active:', isActive);                           // Output: "Active: true"


//* ===========================
//* 4. ADVANCED TUPLE PATTERNS
//* ===========================

// Optional tuple elements (TypeScript 4.0+)
type OptionalTuple = [string, number?];
const opt1: OptionalTuple = ["Hello"];                      // ✅ Valid
const opt2: OptionalTuple = ["Hello", 42];                  // ✅ Valid


// Rest elements in tuples
type NameAndScores = [string, ...number[]];
const student: NameAndScores = ["Alice", 95, 87, 91];
console.log('\nStudent Scores:', student);


// Readonly tuples
const readOnlyTuple: readonly [string, number] = ["Constant", 100];
// readOnlyTuple[0] = "Change";                             // ❌ Error: Cannot assign to '0' because it is a read-only property