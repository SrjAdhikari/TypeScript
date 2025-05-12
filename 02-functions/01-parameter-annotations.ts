/*
 * DEMONSTRATING FUNCTIONS IN TYPESCRIPT
 * Shows regular functions, arrow functions, and TypeScript's parameter checking
*/

//* ========================
//* 1. REGULAR FUNCTIONS
//* ========================

function add(num: number): number {
    return num + 2;
};

const result = add(5);
console.log('Addition result:', result);


function printName(name: string): void {
    console.log(`My name is ${name}`);
};

printName("Suraj");


//* ========================
//* 2. ARROW FUNCTIONS
//* ========================

const greet = (greeting: string): void => {
    console.log(greeting);
};

greet("Hello Everyone!");


const double = (num1: number, num2: number): number => num1 * num2;
console.log('Multiplication result:', double(2, 10));


// Alternative version that logs instead of returning
// const double = (num1: number, num2: number): void => console.log(num1 * num2);
// double(2, 10);


//* ==============================
//* 3. TYPE SAFETY DEMONSTRATION
//* ==============================

/* 
 * TYPE SAFETY IN PARAMETERS
 * TypeScript enforces correct number and type of arguments
*/

// double(2);                               // ❌ Error: Expected 2 arguments, but got 1
// double(2, "10");                         // ❌ Error: Argument of type 'string' is not assignable to parameter of type 'number'
// double(2, 10, 20);                       // ❌ Error: Expected 2 arguments, but got 3


//* ========================
//* 4. OPTIONAL PARAMETERS
//* ========================

/*
 * Function with optional parameter
 * @param required - Required string parameter
 * @param optional - Optional number parameter
*/

const demoOptional = (required: string, optional?: number): void => {
    console.log(`Required: ${required}, Optional: ${optional || 'not provided'}`);
};

demoOptional("Hello");                      // Output: "Required: Hello, Optional: not provided"
demoOptional("Hello", 42);                  // Output: "Required: Hello, Optional: 42"