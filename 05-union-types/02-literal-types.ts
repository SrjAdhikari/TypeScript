/*
 * DEMONSTRATING LITERAL TYPES IN TYPESCRIPT
 * Shows how to restrict variables to specific literal values
*/

//* ========================
//* 1. STRING LITERAL TYPES
//* ========================

/*
 * Variable restricted to specific color strings
 * @type {"Black" | "Red" | "Blue"}
 * Only these exact string values are allowed
*/

let colors: "Black" | "Red" | "Blue";
colors = "Red";                                             // ✅ Valid
// colors = "Yellow";                                       // ❌ Error: Type '"Yellow"' is not assignable to type '"Black" | "Red" | "Blue"'

console.log('Selected color:', colors);                     // Output: "Red"


// Practical use case - CSS theme options
type Theme = "light" | "dark" | "system";
let currentTheme: Theme = "dark";

function applyTheme(theme: Theme) {
    console.log(`Applying ${theme} theme`);
}

applyTheme(currentTheme);                                   // Output: "Applying dark theme"


//* ========================
//* 2. NUMBER LITERAL TYPES
//* ========================

/*
 * Variable restricted to specific numeric values
 * @type {10 | 20 | 30}
 * Only these exact numbers are allowed
*/

let nums: 10 | 20 | 30;
nums = 30;                                                  // ✅ Valid
// nums = 50;                                               // ❌ Error: Type '50' is not assignable to type '10 | 20 | 30'

console.log('Selected number:', nums);                      // Output: 30


// Practical use case - API status codes
type SuccessCode = 200 | 201 | 204;
let apiStatus: SuccessCode = 200;

function handleResponse(code: SuccessCode) {
    console.log(`Received success code: ${code}`);
}

handleResponse(apiStatus);                                  // Output: "Received success code: 200"


//* ===========================
//* 3. BOOLEAN LITERAL TYPES
//* ===========================

/*
 * Variable restricted to boolean literals
 * @type {true | false}
*/

let bool: true | false;
bool = true;                                                // ✅ Valid
// bool = False;                                            // ❌ Error: 'False' is not a boolean literal (case-sensitive)
// bool = True;                                             // ❌ Error: 'True' is not a boolean literal (case-sensitive)

console.log('Boolean value:', bool);                        // Output: true


// Practical use case - strict boolean flags
type StrictBoolean = true | false;
let isActive: StrictBoolean = false;


//* ===========================
//* 4. COMBINED LITERAL TYPES
//* ===========================

/*
 * Mixed literal type example
 * @type {"admin" | "user" | 0 | 1}
*/

let userRole: "admin" | "user" | 0 | 1;
userRole = "admin";                                         // ✅ Valid
userRole = 1;                                               // ✅ Valid
// userRole = "moderator";                                  // ❌ Error


//* ========================
//* 5. PRACTICAL USE CASES
//* ========================

// Configuration options
type LogLevel = "error" | "warn" | "info" | "debug";
let currentLogLevel: LogLevel = "info";

function log(message: string, level: LogLevel) {
    console.log(`[${level.toUpperCase()}] ${message}`);
}

log("Application started", currentLogLevel);                // Output: "[INFO] Application started"


// API endpoints
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";
function makeRequest(method: HttpMethod, url: string) {
    console.log(`Making ${method} request to ${url}`);
}

makeRequest("POST", "/api/users");                          // Output: "Making POST request to /api/users"


//* =====================
//* 6. ADVANCED PATTERNS
//* =====================

// Discriminated unions with literal types
type Square = {
    kind: "square";
    size: number;
};

type Circle = {
    kind: "circle";
    radius: number;
};

type Shape = Square | Circle;

function area(shape: Shape): number {
    switch (shape.kind) {
        case "square": return shape.size ** 2;
        case "circle": return Math.PI * shape.radius ** 2;
    }
}

console.log('Area of square:', area({ kind: "square", size: 5 }));
console.log('Area of circle:', area({ kind: "circle", radius: 3 }));