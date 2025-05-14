/*
 * DEMONSTRATING READONLY PROPERTIES OF OBJECT IN TYPESCRIPT
 * Shows how to mark properties as immutable after initialization
*/

//* =================================
//* 1. TYPE WITH READONLY PROPERTY
//* =================================

/*
 * UserAccount type with readonly id property
 * @typedef {Object} UserAccount
 * @property {string} username - User's login name (mutable)
 * @property {number} accessLevel - Permission level (mutable)
 * @property {readonly string} id - Unique identifier (immutable)
*/

type UserAccount = {
    username: string;
    accessLevel: number;
    readonly id: string;                     // The 'readonly' modifier makes this property immutable
};


//* ========================
//* 2. INITIALIZING OBJECTS
//* ========================

// User account with readonly id
const adminAccount: UserAccount = {
    username: "admin",
    accessLevel: 10,
    id: "user-001"                          // Initial assignment is allowed
};

console.log(`
    Account Details:
    Username: ${adminAccount.username}
    Access Level: ${adminAccount.accessLevel}
    ID: ${adminAccount.id}
`);

// Output:
//    Account Details:
//    Username: admin
//    Access Level: 10
//    ID: user-001


//* ===========================
//* 3. MODIFICATION ATTEMPTS
//* ===========================

// Allowed modifications (mutable properties)
adminAccount.username = "superadmin";
adminAccount.accessLevel = 15;

// Attempting to modify readonly property (commented to prevent error)
// adminAccount.id = "user-002"; 
// ❌ Error: Cannot assign to 'id' because it is a read-only property

console.log(`
    Updated Account:
    Username: ${adminAccount.username}
    Access Level: ${adminAccount.accessLevel}
    ID: ${adminAccount.id} (unchanged)
`);

// Output:
// Updated Account:
// Username: superadmin
// Access Level: 15
// ID: user-001 (unchanged)