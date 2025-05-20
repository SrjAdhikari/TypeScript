/*
 * ADVANCED GENERICS IN TYPESCRIPT
 * Demonstrates practical applications of generics with objects, arrays, and tuples
*/

//* ====================================
//* 1. RANDOM KEY-VALUE PAIR GENERATOR
//* ====================================

/*
 * Gets a random key-value pair from an object
 * @template T - Type of object values
 * @param {Record<string, T>} obj - The input object
 * @returns {{key: string, value: T}} Random key-value pair
*/

function getRandomKeyValuePair<T>(obj: Record<string, T>): { key: string; value: T } {
    const keys = Object.keys(obj);
    if (keys.length === 0) {
        throw new Error("Cannot get random pair from empty object");
    }
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    return { key: randomKey, value: obj[randomKey] };
}

// String object example
const fruitsObj = {
    A: "Apple",
    B: "Banana",
    C: "Cherry",
    D: "Date"
};

const randomFruit = getRandomKeyValuePair<string>(fruitsObj);
console.log('Random Fruit:', randomFruit);


// Number object example
const numObj = {
    one: 1,
    two: 2,
    three: 3
};

const randomNumber = getRandomKeyValuePair<number>(numObj);
console.log('Random Number:', randomNumber);


//* ===========================
//* 2. GENERIC ARRAY FILTER
//* ===========================

/*
 * Filters an array based on a condition
 * @template T - Array element type
 * @param {T[]} array - Array to filter
 * @param {(item: T) => boolean} condition - Filter predicate
 * @returns {T[]} Filtered array
*/

function filterArray<T>(array: T[], condition: (item: T) => boolean): T[] {
    return array.filter(condition);
}

// Filter even numbers
const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = filterArray<number>(numberArray, num => num % 2 === 0);
console.log('\nEven Numbers:', evenNumbers);                                        // Output: [2, 4, 6, 8, 10]


// Filter short words
const words = ["Apple", "Banana", "Cherry", "Date"];
const shortWords = filterArray<string>(words, word => word.length < 6);
console.log('Short Words:', shortWords);                                            // Output: ["Apple", "Date"]


// Filter fruits by color
interface Fruit {
    name: string;
    color: string;
}

const fruitBasket: Fruit[] = [
    { name: "Apple", color: "Red" },
    { name: "Banana", color: "Yellow" },
    { name: "Cherry", color: "Red" },
    { name: "Grape", color: "Purple" }
];

const redFruits = filterArray<Fruit>(fruitBasket, fruit => fruit.color === "Red");
console.log('Red Fruits:', redFruits); 

//* Output: 
// [
//     { name: "Apple", color: "Red" }, 
//     { name: "Cherry", color: "Red" }
// ]


//* ========================
//* 3. TUPLE MANIPULATION
//* ========================

/*
 * Reverses the order of two values in a tuple
 * @template T - First type
 * @template U - Second type
 * @param {T} value1 - First value
 * @param {U} value2 - Second value
 * @returns {[U, T]} Reversed tuple
*/

function reversePair<T, U>(value1: T, value2: U): [U, T] {
    return [value2, value1];
}

const reversed = reversePair("Ten", 10);
console.log('\nReversed Pair:', reversed);                                          // Output: [10, "Ten"]


/*
 * Combines two values into a tuple
 * @template T - First type
 * @template U - Second type
 * @param {T} value1 - First value
 * @param {U} value2 - Second value
 * @returns {[T, U]} Combined tuple
*/

function combineValues<T, U>(value1: T, value2: U): [T, U] {
    return [value1, value2];
}

const combined = combineValues(true, ["One", 1, "Two", 2]);
console.log('Combined Values:', combined);                                          // Output: [true, ["One", 1, "Two", 2]]