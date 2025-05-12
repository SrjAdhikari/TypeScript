/*
 * DEMONSTRATING DEFAULT PARAMETERS IN TYPESCRIPT
 * Shows how to set default values for function parameters
*/

/*
 * Prints user information with a default age value
 * @param name - User's name (required)
 * @param age - User's age (optional, defaults to 25)
*/

function printUserInfo(name: string, age: number = 25): void {
    console.log(`Hello, ${name}! You are ${age} years old.`);
}

//* ========================
//* 1. USING DEFAULT VALUE
//* ========================

printUserInfo("Anonymous");  
// Output: "Hello, Anonymous! You are 25 years old."
// Uses default age value since second argument not provided


//* ========================
//* 2. OVERRIDING DEFAULT
//* ========================

printUserInfo("Srj", 22);   
// Output: "Hello, Srj! You are 22 years old."
// Provided age overrides the default value


//* ========================
//* 3. TYPE SAFETY EXAMPLES
//* ========================

// printUserInfo();                                     // ❌ Error: Expected 1-2 arguments, but got 0
// printUserInfo("Alice", "22");                        // ❌ Error: Argument of type 'string' is not assignable to parameter of type 'number'


//* ========================
//* 4. BEST PRACTICES
//* ========================

/*
 * Default parameters should:
 * 1. Be placed after required parameters
 * 2. Have simple, predictable values
 * 3. Be used for optional but commonly used values

 * Alternative: Using optional parameters (?) without defaults
 * function printUserInfo(name: string, age?: number)
*/

// Advanced example with multiple defaults
function createUser(
    username: string,
    isAdmin: boolean = false,
    permissions: string[] = ["read"]
): void {
    console.log(`User ${username} created with:
    - Admin: ${isAdmin}
    - Permissions: ${permissions.join(", ")}`);
}

console.log("\nAdvanced default parameters example:");

createUser("guest");                                    // Uses all defaults
createUser("admin", true, ["read", "write"]);           // Overrides all defaults