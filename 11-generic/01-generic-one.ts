/*
 * DEMONSTRATING GENERICS IN TYPESCRIPT
 * Shows how to create flexible, reusable code that works with multiple types
*/

//* ==============================
//* 1. PROBLEM WITHOUT GENERICS
//* ==============================

// Prints number pairs (non-generic version)
function printNumber(defaultValue: number, newValue: number): [number, number] {
    return [defaultValue, newValue];
}

// Prints string pairs (non-generic version)
function printString(defaultValue: string, newValue: string): [string, string] {
    return [defaultValue, newValue];
}

// Prints boolean pairs (non-generic version)
function printBoolean(defaultValue: boolean, newValue: boolean): [boolean, boolean] {
    return [defaultValue, newValue];
}

console.log('\nWithout Generics:');
console.log(printNumber(10, 100));                              // Output: [10, 100]
console.log(printString("Hello", "Suraj"));                     // Output: ["Hello", "Suraj"]
console.log(printBoolean(true, false));                         // Output: [true, false]


//* ==============================
//* 2. GENERIC FUNCTION SOLUTION
//* ==============================

/*
 * Generic function to handle any type
 * @template T - The type parameter
 * @param {T} defaultValue - First value of type T
 * @param {T} newValue - Second value of type T
 * @returns {[T, T]} Tuple containing both values
*/

function genericFunction<T>(defaultValue: T, newValue: T): [T, T] {
    return [defaultValue, newValue];
}

console.log('\nWith Generics:');
const num = genericFunction<number>(1, 10);                     // Explicit type
const str = genericFunction("Hello", "TypeScript");             // Type inferred
const boo = genericFunction<boolean>(false, true);              // Explicit type

console.log(num);                                               // Output: [1, 10]
console.log(str);                                               // Output: ["Hello", "TypeScript"]
console.log(boo);                                               // Output: [false, true]


//* ==============================
//* 3. GENERICS WITH INTERFACES
//* ==============================

interface Dog {
    name: string;
    breed: string;
}

const dogs = genericFunction<Dog>(
    { name: "Buddy", breed: "Labrador" },
    { name: "Max", breed: "German Shepherd"}
);

console.log('\nGeneric with Objects:');
console.log(dogs);


//* Output:
// Generic with Objects:
// [
//     { name: 'Buddy', breed: 'Labrador' },
//     { name: 'Max', breed: 'German Shepherd' }
// ]


//* ===========================
//* 4. GENERIC ARRAY SORTING
//* ===========================

/*
 * Generic array sorting function
 * @template T - Array element type
 * @param {T[]} array - Array to sort
 * @returns {T[]} Sorted array
*/

function sortArray<T>(array: T[]): T[] {
    return [...array].sort((a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    });
}

console.log('\nGeneric Sorting:');
const randomNumbers = [3, 2, 1, 5, 4];
const sortedNumbers = sortArray(randomNumbers);
console.log('Sorted numbers:', sortedNumbers);                  // Output: [1, 2, 3, 4, 5]


const fruits = ["Watermelon", "Apple", "Orange", "Banana", "Kiwi"];
const sortedFruits = sortArray(fruits);
console.log('Sorted fruits:', sortedFruits);                    // Output: ["Apple", "Banana", "Kiwi", "Orange", "Watermelon"]