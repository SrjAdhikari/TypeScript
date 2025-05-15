/*
 * DEMONSTRATING TYPE ALIASES IN TYPESCRIPT
 * Shows how to create reusable type definitions for objects and functions
*/

//* ===========================
//* 1. TYPE ALIAS WITH OBJECT
//* ===========================

/*
 * Person type definition
 * @typedef {Object} Person
 * @property {string} name - Full name of the person
 * @property {number} age - Age in years
 * @property {string} location - Current location
*/

type Person = {
    name: string;
    age: number;
    location: string;
};

// Creating an object that conforms to the Person type
const personObj: Person = {
    name: "SRJ",
    age: 22,
    location: "JPN"
};

// Using template literals for formatted output
console.log(`
    Person Details:
    Name: ${personObj.name}
    Age: ${personObj.age}
    Location: ${personObj.location}
`);

// Output:
// Person Details:
// Name: SRJ
// Age: 22
// Location: JPN


//* ==============================
//* 2. TYPE ALIAS WITH FUNCTION
//* ==============================

/*
 * User type definition
 * @typedef {Object} User
 * @property {string} name - User's full name
 * @property {string} email - User's email address
 * @property {string} city - User's city of residence
*/

type User = {
    name: string;
    email: string;
    city: string;
};


/*
 * Formats user information into a readable string
 * @param {User} user - User object to display
 * @returns {string} Formatted user information
*/

const displayUserInfo = (user: User): string => {
    return `
        User Information:
        Name: ${user.name}
        Email: ${user.email}
        City: ${user.city}
    `;
};

// Using the function with a User object
const userInfo = displayUserInfo({
    name: "Suraj",
    email: "suraj@gmail.com",
    city: "Tokyo"
});

console.log(userInfo);

// Output:
// User Information:
// Name: Suraj
// Email: suraj@gmail.com
// City: Tokyo


//* ========================
//* 3. BEST PRACTICES
//* ========================

/*
 * When using type aliases:
 * 1. Use descriptive names (Person, User instead of Obj1, Obj2)
 * 2. Keep consistent property naming (camelCase recommended)
 * 3. Add JSDoc comments for complex types
 * 4. Place type aliases near the top of files or in separate type files
 * 5. Use interfaces for object shapes that need to be implemented
 */