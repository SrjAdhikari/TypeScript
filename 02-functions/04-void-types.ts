/*
 * DEMONSTRATING VOID RETURN TYPE IN TYPESCRIPT
 * Shows functions that don't return any value
*/

//* ==============================
//* 1. VOID RETURN TYPE EXAMPLES
//* ==============================

/*
 * Prints a message to console (no return value)
 * @param message - The message to display
 * @returns void (no return value)

 * Note: The void type explicitly indicates this function
 * doesn't return anything. Attempting to return a value
 * would cause a TypeScript error.
*/

function printMsg(message: string): void {
    console.log(`This is my message: ${message}`);
    
    // return message;                                      // ❌ Error: Type 'string' is not assignable to type 'void'
}

printMsg("Hello! how are you?");                            // Output: "This is my message: Hello! how are you?"


/*
 * Checks if a number is even or odd and logs the result
 * @param num - The number to check
 * @returns void (only logs to console)

 * Note: Even though this performs logic, it doesn't return
 * a value - it only produces side effects (console output).
*/

function isEven(num: number): void {
    if (num % 2 === 0) {
        console.log(`${num} is even number.`);
    } else {
        console.log(`${num} is odd number.`);
    }
    
    // return num % 2 === 0;                                // ❌ Can't return boolean when void is declared

}

isEven(4);                                                  // Output: "4 is even number."
isEven(5);                                                  // Output: "5 is odd number."


//* ========================
//* 2. VOID VS UNDEFINED
//* ========================

/*
 * Important distinction:
 * - void: This function is not meant to return anything
 * - undefined: This function returns the value undefined

 * In practice, void is more commonly used for side-effect functions
*/

function noReturn(): void {
    console.log("I don't return anything");
    // No return statement needed
}


function returnsUndefined(): undefined {
    console.log("I explicitly return undefined");
    return undefined;                                       // Required when using undefined return type
}


//* ========================
//* 3. PRACTICAL USE CASES
//* ========================

/*
 * Logs an error message to console
 * @param error - The error message or object
 * @returns void
*/

function logError(error: string | Error): void {
    if (typeof error === 'string') {
        console.error(`ERROR: ${error}`);
    } else {
        console.error(`ERROR: ${error.message}`);
    }
}


/*
 * Displays a notification to the user
 * @param text - Notification content
 * @param type - Type of notification ('info' | 'warning' | 'error')
 * @returns void
*/

const showNotification = (text: string, type: 'info' | 'warning' | 'error'): void => {
    console.log(`[${type.toUpperCase()}] ${text}`);
};

console.log('\nPractical void examples:');

logError("Something went wrong");
showNotification("File saved successfully", "info");