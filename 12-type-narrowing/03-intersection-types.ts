/*
 * DEMONSTRATING TYPE NARROW WITH INTERSECTION TYPES IN TYPESCRIPT
 * Shows how to create and use intersection types to combine multiple type definitions
*/

//* ========================
//* 1. TYPE DEFINITIONS
//* ========================

// Basic employee information
type EmployeeType = {
    id: number;
    name: string;
};

// Manager-specific information
type ManagerType = {
    department: string;
    role: string;
};


// Intersection type combining EmployeeType and ManagerType
// Represents a manager with both employee and manager properties

type ManagerWithEmployeeInfo = EmployeeType & ManagerType;


//* =======================================
//* 2. INTERSECTION TYPE IMPLEMENTATION
//* =======================================

// Example of a manager with combined employee and manager information
const manager1: ManagerWithEmployeeInfo = {
    id: 123,
    name: "John Doe",
    department: "Engineering",
    role: "Team Lead",
};

// Accessing combined properties
console.log('Employee ID:', manager1.id);                       // Output: 123
console.log('Employee Name:', manager1.name);                   // Output: "John Doe"
console.log('Department:', manager1.department);                // Output: "Engineering"
console.log('Role:', manager1.role);                            // Output: "Team Lead"