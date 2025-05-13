/*
 * DEMONSTRATING RETURN TYPE ANNOTATIONS IN TYPESCRIPT
 * Shows explicit return type declarations for different data types
 * Highlights the benefits of return type annotations for code safety and clarity
*/

//* ===========================
//* 1. NUMBER RETURN EXAMPLES
//* ===========================

/*
 * Calculates the square of a number (regular function)
 * @param num - The input number to be squared
 * @returns - The squared value as number

 * Benefits of return type annotation:
 * - Ensures function always returns the correct type
*/

function square(num: number): number {
    return num * num;
    // return "25";                                         // ❌ Would be caught by TypeScript (string not assignable to number)
};

console.log('Square of 5:', square(5));


/*
 * Calculates the cube of a number (arrow function))
 * @param num - The input number to be cubed
 * @returns The cubed value as number

 * Note: Even with implicit returns, type annotations ensure safety
*/

const cube = (num: number): number => num * num * num;
// const cube = (num: number): number => "27";              // ❌ TypeScript would catch this error

console.log('Cube of 3:', cube(3));


//* ===========================
//* 2. STRING RETURN EXAMPLES
//* ===========================

/*
 * Greets a user (regular function)
 * @param name - The name to greet
 * @returns A greeting string
*/

function createGreeting(name: string): string {
    return `Hello, ${name}!`;
    // return true;                                         // ❌ TypeScript error: can't return boolean when string is declared
}

console.log(createGreeting("Alice"));


/*
 * Formats a price (arrow function)
 * @param amount - The numeric amount
 * @returns Formatted price string
*/

const formatPrice = (amount: number): string => `$${amount.toFixed(2)}`;
console.log('Formatted price:', formatPrice(15.5));


//* ===========================
//* 3. BOOLEAN RETURN EXAMPLES
//* ===========================

/*
 * Checks if a number is even (regular function)
 * @param num - The number to check
 * @returns Boolean result
*/

function isOdd(num: number): boolean {
    return num % 2 !== 0;
    // return "yes";                                        // ❌ TypeScript error: can't return string when boolean is declared
}

console.log('Is 6 even?', isOdd(6));                        // Output: false


/*
 * Validates an email (arrow function)
 * @param email - The email to validate
 * @returns Validation result
*/

const isValidEmail = (email: string): boolean => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
console.log('Is test@test.com valid?', isValidEmail("test@test.com"));


//* ===========================
//* 4. TYPE SAFETY BENEFITS
//* ===========================

/*
 * Why explicit return types matter:
 * 1. Catches wrong return types during development
 * 2. Makes function contracts clearer
 * 3. Enables better code completion
 * 4. Enables better code completion
*/

// function badSquare(num: number): number {
//     return "25";                                         // ❌ Type 'string' is not assignable to type 'number'
// }

// const badCube = (num: number): number => true;           // ❌ Type 'boolean' is not assignable to type 'number'


// function badStringExample(): string {
//     return 100;                                          // ❌ Can't return number when string is declared
// }

// const badBooleanExample = (): boolean => {
//     return "true";                                       // ❌ Can't return string when boolean is declared
// }


//* ===========================
//* 5. ADVANCED RETURN TYPES
//* ===========================

/*
 * Function that may return number or undefined
 * @param num - Optional input number
 * @returns Number or undefined

 * Demonstrates union return type
*/

function maybeSquare(num?: number): number | undefined {
    return num ? num * num : undefined;
}

console.log('\nAdvanced return types:');
console.log('Optional square:', maybeSquare(4));            // Output: 16
console.log('Optional square:', maybeSquare());             // Output: undefined