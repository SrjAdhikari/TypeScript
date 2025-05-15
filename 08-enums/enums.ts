/*
 * DEMONSTRATING ENUMS IN TYPESCRIPT
 * Shows both numeric and string enums with practical examples
*/

//* ===========================
//* 1. NUMERIC ENUM (DEFAULT)
//* ===========================

/*
 * Weather conditions enum (numeric values auto-assigned)
 * @enum {number}

 * Numeric enums:
 * - Auto-increment from 0 by default
 * - Can access values by name or index
 * - Provide reverse mapping
*/

enum WeatherConditions {
    Sunny,
    Cloudy,
    Rainy,
    Snowy,
    Clear
}

console.log('Numeric Enum Examples:');
console.log('Sunny:', WeatherConditions.Sunny);                 // Output: 0
console.log('Cloudy:', WeatherConditions.Cloudy);               // Output: 1
console.log('Rainy:', WeatherConditions.Rainy);                 // Output: 2


// Reverse mapping (number to name)
console.log('Weather at index 0:', WeatherConditions[0]);       // Output: "Sunny"
console.log('Weather at index 3:', WeatherConditions[3]);       // Output: "Snowy"


//* =====================
//* 2. STRING ENUM
//* =====================

/*
 * Week days enum (string values)
 * @enum {string}

 * String enums:
 * - No auto-increment behavior
 * - No reverse mapping
 * - Must initialize each member
*/

enum WeekDays {
    Sunday = "Sunday",
    Monday = "Monday",
    Tuesday = "Tuesday",
    Wednesday = "Wednesday",
    Thursday = "Thursday",
    Friday = "Friday",
    Saturday = "Saturday"
}

const today = WeekDays.Monday;

console.log('\nString Enum Examples:');
console.log(`Today is ${today}`);                               // Output: "Today is Monday"
console.log('Sunday:', WeekDays.Sunday);                        // Output: "Sunday"


// This would cause an error (no reverse mapping in string enums)
// console.log(WeekDays[0]);                                    // ❌ Error: No reverse mapping


//* ===========================
//* 3. CUSTOM NUMERIC VALUES
//* ===========================

/*
 * HTTP Status Codes enum
 * @enum {number}

 * Can set custom numeric values
 * Subsequent values auto-increment
*/

enum HttpStatus {
    OK = 200,
    Created = 201,
    Accepted = 202,
    BadRequest = 400,
    Unauthorized = 401,
    PaymentRequired = 402,
    Forbidden = 403
}

console.log('\nCustom Numeric Values:');
console.log('OK:', HttpStatus.OK);                              // Output: 200
console.log('BadRequest:', HttpStatus.BadRequest);              // Output: 400


//* =====================
//* 4. CONST ENUMS
//* =====================

/*
 * Direction enum (const)
 * @enum {number}

 * Const enums:
 * - Removed during compilation
 * - More efficient
 * - No runtime representation
*/

const enum Direction {
    Up,
    Down,
    Left,
    Right
}

let move = Direction.Up;

console.log('\nConst Enum Example:');
console.log('Move:', move);                                     // Output: 0

// console.log(Direction[0]);                                   // ❌ Error: const enums have no runtime representation


//* ========================
//* 5. PRACTICAL USE CASES
//* ========================

// User Roles
enum UserRole {
    Admin = 'ADMIN',
    Editor = 'EDITOR',
    Subscriber = 'SUBSCRIBER'
}


function checkAccess(role: UserRole) {
    if (role === UserRole.Admin) {
        console.log('Full access granted');
    } else {
        console.log('Limited access');
    }
}

console.log('\nPractical Examples:');
checkAccess(UserRole.Admin);                                    // Output: "Full access granted"


//* =====================
//* 6. BEST PRACTICES
//* =====================

/*
 * When using enums:
 * 1. Use PascalCase for enum names
 * 2. Use ALL_CAPS for constant values if appropriate
 * 3. Prefer string enums for better debugging
 * 4. Use const enums for performance-critical code
 * 5. Document enum purposes and values
*/