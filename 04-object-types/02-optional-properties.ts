/*
 * DEMONSTRATING OPTIONAL PROPERTIES OF OBJECT IN TYPESCRIPT
 * Shows how to mark properties as optional in type definitions
*/

//* =================================
//* 1. TYPE WITH OPTIONAL PROPERTY
//* =================================

// Product type definition with optional description
type Product = {
    name: string;
    price: number;
    id: string;
    description?: string;                   // The '?' marks this property as optional
};


//* ====================================
//* 2. USING WITHOUT OPTIONAL PROPERTY
//* ====================================

// Product without optional description
const product: Product = {
    name: "Laptop",
    price: 50000,
    id: "1524"
    // No description provided - this is valid
};

console.log(`
    Product 1 Details:
    Name: ${product.name}
    Price: $${product.price.toLocaleString()}
    ID: ${product.id}
    Description: ${product.description || "Not available"}
`);

// Output:
// Product 1 Details:
// Name: Laptop
// Price: $50,000
// ID: 1524
// Description: Not available

console.log('Type of missing description:', typeof product.description); 
// Output: undefined


//* =================================
//* 3. USING WITH OPTIONAL PROPERTY
//* =================================

// Product with optional description provided
const product2: Product = {
    name: "Camera",
    price: 12000,
    id: "7512",
    description: "Digital camera with auto focus."      // Description provided
};

console.log(`
    Product 2 Details:
    Name: ${product2.name}
    Price: $${product2.price.toLocaleString()}
    ID: ${product2.id}
    Description: ${product2.description}
`);

// Output:
// Product 2 Details:
// Name: Camera
// Price: $12,000
// ID: 7512
// Description: Digital camera with auto focus.


//* =======================================
//* 5. WORKING WITH OPTIONAL PROPERTIES
//* =======================================

// Safe access techniques:
const descriptionLength = product2.description?.length;                     // Optional chaining
console.log('Description length:', descriptionLength);                      // Output: 28


const safeDescription = product.description ?? "Default description";       // Nullish coalescing
console.log('Safe description:', safeDescription);                          // Output: "Default description"


// Type narrowing with checks
if (product2.description) {
    console.log('Description exists:', product2.description.toUpperCase());
    // TypeScript knows description is string here
}

//* ========================
//* 6. PRACTICAL USE CASES
//* ========================

// API Response Type
type ApiResponse = {
    success: boolean;
    data: any;
    errorMessage?: string;                                                  // Only present when success=false
    timestamp?: Date;                                                       // Optional timestamp
};

// User Profile Type
type UserProfile = {
    username: string;
    email: string;
    avatarUrl?: string;                                                     // Optional profile picture
    age?: number;                                                           // Optional demographic info
};

console.log('\nPractical optional properties examples:');

const response: ApiResponse = {
    success: false,
    data: null,
    errorMessage: "Resource not found"
};

console.log('API Error:', response.errorMessage);


const newUser: UserProfile = {
    username: "jsmith",
    email: "john@example.com"
    // No avatar or age provided
};

console.log('New user:', newUser.username, '(avatar not set)');