/*
 * DEMONSTRATING TYPE NARROW USING TYPE GUARDS IN TYPESCRIPT
 * Shows type narrowing with typeof checks and union type handling
*/

//* ========================
//* 1. TYPE DEFINITION
//* ========================

// A union type that can be either string or number
type myType = string | number;


//* ========================
//* 2. TYPE GUARD FUNCTION
//* ========================

/*
 * Processes a value based on its type (string or number)
 * @param value - The input value of type myType (string | number)
 * @returns Processed value: uppercase string or fixed-point number string
 * @description This function acts as a type guard, performing different operations
 *              based on the runtime type of the input value
*/

function typeGuard(value: myType): myType {
    if(typeof value === "string")
        // TypeScript knows 'value' is string in this block
        return value.toUpperCase();
    else
        // TypeScript knows 'value' is number in this block
        return value.toFixed(2);
}


//* ========================
//* 3. USAGE EXAMPLES
//* ========================

// String processing example
const strValue = typeGuard("Suraj");
console.log('String processed:', strValue);                 // Output: "SURAJ"

// Number processing example
const numValue = typeGuard(20);
console.log('Number processed:', numValue);                 // Output: "20.00"