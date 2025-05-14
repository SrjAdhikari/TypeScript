/*
 * DEMONSTRATING OBJECT TYPE ANNOTATIONS IN TYPESCRIPT
 * Shows inline type annotations for objects
 * Includes object return types and parameter types
*/

//* ===========================
//* 1. OBJECT TYPE ANNOTATION
//* ===========================

/*
 * Person object with inline type annotation
 * @type {{name: string, age: number, country: string}}
*/

const person: {
    name: string,
    age: number,
    country: string
} = {
    name: "Suraj",
    age: 20,
    country: "Nepal"
};

// Using template literals for formatted output
console.log(`
    Person Details:
    Name: ${person.name}, 
    Age: ${person.age}, 
    Country: ${person.country}
`);

// Output: 
// Person Details:
// Name: Suraj,
// Age: 20,
// Country: Nepal


//* ========================
//* 2. OBJECT RETURN TYPES
//* ========================

/*
 * Function that returns an object with specific shape
 * @returns {{name: string, age: number, country: string}} User object
*/

function createUser(): {name: string, age: number, country: string} {
    return {
        name: "Srj",
        age: 22,
        country: "NPL"
    };
}

const user = createUser();
console.log('\nCreated User:', user);

// Output: { name: "Srj", age: 22, country: "NPL" }


//* ===========================
//* 3. OBJECT PARAMETER TYPES
//* ===========================

/*
 * Prints a user's full name
 * @param user - Object containing firstName and lastName
 * @param user.firstName - User's first name
 * @param user.lastName - User's last name
*/

function printUserName(user: {
    firstName: string,
    lastName: string
}): void {
    console.log(`User full name is: ${user.firstName} ${user.lastName}`);
}

printUserName({ firstName: "Suraj", lastName: "Adhikari" });


//* ========================
//* 4. TYPE SAFETY EXAMPLES
//* ========================

/*
 * TypeScript prevents these invalid operations:
*/

// person.age = "25";                                   // ❌ Error: Type 'string' is not assignable to type 'number'
// createUser().country = 123;                          // ❌ Error: Type 'number' is not assignable to type 'string'
// printUserName({ firstName: "John" });                // ❌ Error: Missing required property 'lastName'


//* ========================
//* 7. PRACTICAL USE CASES
//* ========================

// API Response Shape
function fetchUserData(): {
    id: number,
    username: string,
    email: string,
    isVerified: boolean
} {
    // Simulate API response
    return {
        id: 1,
        username: "suraj_adh",
        email: "suraj@example.com",
        isVerified: true
    };
}

console.log('\nUser data from API:', fetchUserData());


// Configuration Object
function setupApp(config: {
    darkMode: boolean,
    fontSize: number,
    language: string
}) {
    console.log('App configured with:', config);
}

setupApp({ darkMode: true, fontSize: 14, language: "EN" });