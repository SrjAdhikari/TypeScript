/*
 * DEMONSTRATING INTERFACE WITH FUNCTION IN TYPESCRIPT
 * Shows function interfaces and object interfaces with practical implementations
*/

//* ========================
//* 1. FUNCTION INTERFACE
//* ========================

/*
 * Math operation function interface
 * @interface
 * @description Defines the structure for math operation functions
 * @param {number} num1 - First operand
 * @param {number} num2 - Second operand
 * @returns {number} Result of the operation
*/

interface MathOperation {
    (num1: number, num2: number): number;
}

// Arrow function implementation
const add: MathOperation = (a, b) => a + b;
const subtract: MathOperation = (a, b) => a > b ? a - b : b - a;

// Function expression implementation
const multiply: MathOperation = function(a, b) {
    return a * b;
}

const divide: MathOperation = function(a, b) {
    if (b === 0) throw new Error("Cannot divide by zero");
    return a / b;
}

// Executing math operations
console.log('Addition:', add(5, 4));                        // Output: 9
console.log('Subtraction:', subtract(3, 5));                // Output: 2 (absolute difference)
console.log('Multiplication:', multiply(2, 7));             // Output: 14
console.log('Division:', divide(10, 5));                    // Output: 2


//* ========================
//* 2. OBJECT INTERFACE
//* ========================

// Car information interface
interface CarInfo {
    brand: string;
    model: string;
    year: number;
}

/*
 * Prints formatted car information
 * @param {CarInfo} car - Object containing car details
 * @returns {void}
*/

function printCarInfo(car: CarInfo): void {
    console.log(`
        Car Details:
        Brand: ${car.brand}
        Model: ${car.model}
        Year: ${car.year}
    `);
}

// Creating car object
const myCar: CarInfo = {
    brand: "Mercedes",
    model: "G-Class",
    year: 2020
};

printCarInfo(myCar);

//* Output:
//  Car Details:
//  Brand: Mercedes
//  Model: G-Class
//  Year: 2020'