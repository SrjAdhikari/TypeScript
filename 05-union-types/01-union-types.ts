/*
 * DEMONSTRATING UNION TYPES IN TYPESCRIPT
 * Shows how to use the '|' operator to create flexible type definitions
 * Includes examples of variable, object, and array unions
*/

//* =====================
//* 1. BASIC UNION TYPE
//* =====================

/*
 * Variable that can be either string or number
 * @type {string | number}

 * Useful for values that might come in different formats
*/

let password: string | number = "@Something123";
console.log('Password as string:', password);

// Can be reassigned to number
password = 12345678;
console.log('Password as number:', password);


//* ========================
//* 2. OBJECT TYPE UNIONS
//* ========================

// Person details type
type PersonDetails = {
    firstName: string;
    lastName: string;
    age: number;
};


// Account details type
type AccDetails = {
    email: string;
    password: string;
};


/*
 * Variable that can be either PersonDetails or AccDetails
 * @type {PersonDetails | AccDetails}
*/

let information: PersonDetails | AccDetails = {
    email: "someone@gmail.com",
    password: "@Strong123",
};

console.log('\nAccount information:', information);


information = {
    firstName: "Suraj",
    lastName: "Adhikari",
    age: 22,
};

console.log('Person information:', information);


//* =====================
//* 3. ARRAY UNION TYPE
//* =====================

// Array that can contain numbers or strings
let unionArray: (number | string)[] = [1, 2, "Three", "Four"];
console.log('\nMixed array:', unionArray);


//* ========================
//* 5. PRACTICAL USE CASES
//* ========================

// API Response Handling
type SuccessResponse = {
    status: 'success';
    data: any;
};

type ErrorResponse = {
    status: 'error';
    message: string;
};

type ApiResponse = SuccessResponse | ErrorResponse;

function handleResponse(response: ApiResponse) {
    if (response.status === 'success') {
        console.log('Received data:', response.data);
    } else {
        console.error('Error:', response.message);
    }
}

console.log('\nAPI Response Examples:');

handleResponse({ status: 'success', data: { id: 1, name: 'Test' } });
handleResponse({ status: 'error', message: 'Not found' });


//* =====================
//* 6. ADVANCED PATTERNS
//* =====================

// Discriminated Unions (using common property)
type Dog = {
    type: 'dog';
    bark: () => void;
};

type Cat = {
    type: 'cat';
    meow: () => void;
};

type Animal = Dog | Cat;

function handleAnimal(animal: Animal) {
    switch (animal.type) {
        case 'dog':
            animal.bark();
            break;
        case 'cat':
            animal.meow();
            break;
    }
}

// Literal Type Unions
type Status = 'pending' | 'approved' | 'rejected';
const currentStatus: Status = 'pending';