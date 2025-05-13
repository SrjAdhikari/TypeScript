/*
 * DEMONSTRATING THE NEVER TYPE IN TYPESCRIPT
 * Shows functions that never complete normally
 * Includes three common use cases for never type
*/

//* ===========================
//* 1. ERROR THROWING FUNCTION
//* ===========================

/*
 * Throws an error and never completes
 * @param msg - Error message to throw
 * @returns never (function never returns)

 * Note: The 'never' type indicates this function:
 * - Doesn't return normally
 * - Doesn't implicitly return undefined
 * - Either throws or terminates the program
*/

function throwError(msg: string): never {
    throw new Error(msg);
    // Any code here would be unreachable
}


//* ===========================
//* 2. INFINITE LOOP FUNCTION
//* ===========================

/*
 * Enters an infinite loop and never returns
 * @returns never (function never exits)

 * Note: This is a theoretical example - in practice,
 * infinite loops are usually unintentional bugs.
*/

function infiniteLoop(): never {
    while (true) {
        // This loop never breaks
    }

    // console.log("This line is unreachable");                     // ❌ Unreachable code detected
}


//* ========================
//* 3. VARIABLE ASSIGNMENT
//* ========================

/*
 * Function that never returns (infinite loop)
 * @returns never
*/

let x: never;

function neverReturns(): never {
    while (true) {}
}

// This would cause a compilation error
x = neverReturns();                                                 // ❌ Error: Type 'never' is not assignable to type 'never'


/*
 * Explanation:
 * - The function correctly returns never
 * - But a variable of type 'never' can't be assigned to
 * - This is because 'never' represents an unreachable state
*/


//* ==============================
//* 5. TYPE SYSTEM IMPLICATIONS
//* ==============================

/*
 * Key characteristics of 'never':
 * 1. Represents unreachable code
 * 2. Is a subtype of all types
 * 3. Has no values
 * 4. Used for:
 *    - Functions that always throw
 *    - Infinite loops
 *    - Exhaustive type checking
 *    - Impossible type intersections
*/