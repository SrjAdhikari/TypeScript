/*
 * DEMONSTRATING INTERSECTION TYPES OF OBJECT IN TYPESCRIPT
 * Shows how to combine multiple types into one using the & operator
*/

//* ===========================
//* 1. BASIC TYPE DEFINITIONS
//* ===========================

/*
 * Customer information type
 * @typedef {Object} CustomerInfo
 * @property {string} firstName - Customer's first name
 * @property {string} lastName - Customer's last name
 * @property {number} age - Customer's age
*/

type CustomerInfo = {
    firstName: string;
    lastName: string;
    age: number;
};


/*
 * Account details type
 * @typedef {Object} AccountDetails
 * @property {string} email - Account email address
 * @property {string} password - Account password
*/

type AccountDetails = {
    email: string;
    password: string;
};


//* ==============================
//* 2. CREATING INTERSECTION TYPE
//* ==============================

/*
 * Combined person information type
 * @typedef {CustomerInfo & AccountDetails} PersonInfo

 * This creates a new type that has all properties from both:
 * - CustomerInfo (firstName, lastName, age)
 * - AccountDetails (email, password)
*/

type PersonInfo = CustomerInfo & AccountDetails;


//* =================================
//* 3. USING THE INTERSECTION TYPE
//* =================================

// User object that satisfies both CustomerInfo and AccountDetails
const suraj: PersonInfo = {
    firstName: "Suraj",
    lastName: "Adhikari",
    age: 22,
    email: "suraj12@gmail.com",
    password: "strongPassword124"
};

console.log(`
    User Information:
    First Name: ${suraj.firstName}
    Last Name: ${suraj.lastName}
    Age: ${suraj.age}
    Email: ${suraj.email}
    Password: ${suraj.password}
`);


//* ========================
//* 4. PRACTICAL USE CASES
//* ========================

// Combining with optional properties
type ContactInfo = {
    phone?: string;
    address?: string;
};

type CompleteProfile = PersonInfo & ContactInfo;

const completeUser: CompleteProfile = {
    firstName: "Alice",
    lastName: "Johnson",
    age: 28,
    email: "alice@example.com",
    password: "alice123",
    phone: "+1234567890"
};

console.log('\nComplete Profile:');

console.log('Name:', completeUser.firstName, completeUser.lastName);
console.log('Contact:', completeUser.phone || 'No phone provided');


// Combining with readonly properties
type ImmutableDetails = {
    readonly userId: string;
    readonly createdAt: Date;
};

type UserRecord = PersonInfo & ImmutableDetails;

const userRecord: UserRecord = {
    firstName: "Bob",
    lastName: "Brown",
    age: 35,
    email: "bob@example.com",
    password: "bobpass",
    userId: "user-123",
    createdAt: new Date()
};

// userRecord.userId = "new-id";            // ❌ Error: readonly property