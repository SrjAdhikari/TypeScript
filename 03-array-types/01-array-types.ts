/*
 * DEMONSTRATING ARRAY TYPE ANNOTATIONS IN TYPESCRIPT
 * Shows different ways to type arrays and their operations
*/

//* ========================
//* 1. BASIC ARRAY TYPING
//* ========================

// Number array example
const numArray: number[] = [10, 20, 30];
console.log('Number array:', numArray);                     // Output: [10, 20, 30]
console.log('Array length:', numArray.length);              // Output: 3
console.log('First element:', numArray[0]);                 // Output: 10


// String array example
const strArray: string[] = ["one", "Two", "Three"];
console.log('\nString array:', strArray);                   // Output: ["one", "Two", "Three"]
console.log('Array length:', strArray.length);              // Output: 3
console.log('First element:', strArray[0]);                 // Output: "one"


//* =================================
//* 2. TYPE-SAFE ARRAY OPERATIONS
//* =================================

// Empty string array with push operations
const colors: string[] = [];
colors.push("Black");
colors.push("Green");
// colors.push(20);                                         // ❌ Error: Argument of type 'number' is not assignable to parameter of type 'string'

console.log('\nColors array:', colors);                     // Output: ["Black", "Green"]


// Empty number array with push operations
const numList: number[] = [];
numList.push(100);
numList.push(200);
numList.push(-200);
// numList.push("100");                                     // ❌ Error: Argument of type 'string' is not assignable to parameter of type 'number'

console.log('\nNumber list:', numList);                     // Output: [100, 200, -200]


//* ========================
//* 3. UNION TYPE ARRAYS
//* ========================

//  Mixed type array (number or string)
const mixArray: (number | string)[] = [];
mixArray.push(100);                                         // Valid
mixArray.push("100");                                       // Valid
mixArray.push("Suraj");                                     // Valid
mixArray.push(-200);                                        // Valid
// mixArray.push(true);                                     // ❌ Error: boolean not in union type

console.log('\nMixed array:', mixArray);                    // Output: [100, "100", "Suraj", -200]


//* ===========================
//* 4. GENERIC ARRAY SYNTAX
//* ===========================

//* Generic syntax for string array
const items: Array<string> = ["One", "Two", "Three"];
// Equivalent to: const items: string[] = ["One", "Two", "Three"];

console.log('\nGeneric string array:', items);


//* Generic syntax for number array
const numbers: Array<number> = [1, 2, 3, 4, 5];
// Equivalent to: const numbers: number[] = [1, 2, 3, 4, 5];

console.log('Generic number array:', numbers);


//* Generic syntax for mixed type array
const mixArray2: Array<string | number> = ["Suraj", 25, "John", 30];
// Equivalent to: const mixArray2: (string | number)[] = ["Suraj", 25, "John", 30];

console.log('Generic mixed array:', mixArray2);