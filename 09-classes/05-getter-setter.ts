/*
 * DEMONSTRATING GETTERS AND SETTERS IN TYPESCRIPT
 * Shows how to control access to class properties with validation
*/

//* ===========================
//* 1. BASIC GETTERS/SETTERS
//* ===========================

/*
 * Person class with controlled property access
 * @class
 * @property {string} name - Public property
 * @property {private number} _age - Private backing field for age
 * @property {private string} _email - Private backing field for email
*/

class Person {
    public name: string;
    private _age: number;
    private _email: string;
    
    constructor(name: string, age: number, email: string) {
        this.name = name;
        this._age = age;
        this._email = email;
    }

    // Getter for age
    get age(): number {
        return this._age;
    }

    // Setter for age with validation
    set age(newAge: number) {
        if (newAge > 0 && newAge < 120) {
            this._age = newAge;
        } else {
            throw new Error("Invalid age! Must be between 1 and 119");
        }
    }

    // Getter for email
    get email(): string {
        return this._email;
    }

    // Setter for email with validation
    set email(newEmail: string) {
        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newEmail)) {
            this._email = newEmail;
        } else {
            throw new Error("Invalid email format!");
        }
    }

    get userInfo(): string {
        return `Name: ${this.name}, Age: ${this._age}, Email: ${this._email}`;
    }
}

const user = new Person("Suraj", 20, "srj@gmail.com");

console.log('Initial User:');
console.log(`Name: ${user.name}`);
console.log(`Age: ${user.age}`);
console.log(`Email: ${user.email}`);
console.log(user.userInfo);


console.log('\nUpdating User:');
user.age = 25;                                  // ✅ Valid age
user.email = "suraj12@gmail.com";               // ✅ Valid email


console.log(`Updated Age: ${user.age}`);
console.log(`Updated Email: ${user.email}`);


// Attempting invalid assignments
// user.age = -5;                               // ❌ Throws error: "Invalid age!"
// user.email = "invalid";                      // ❌ Throws error: "Invalid email format!"


//* ========================
//* 2. COMPUTED PROPERTIES
//* ========================

class Circle {
    constructor(private _radius: number) {}

    get radius(): number {
        return this._radius;
    }

    set radius(value: number) {
        if (value > 0) this._radius = value;
    }

    // Computed getter for area
    get area(): number {
        return Math.PI * this._radius ** 2;
    }

    // Computed getter for circumference
    get circumference(): number {
        return 2 * Math.PI * this._radius;
    }
}

const myCircle = new Circle(5);

console.log('\nCircle Calculations:');
console.log(`Radius: ${myCircle.radius}`);
console.log(`Area: ${myCircle.area.toFixed(2)}`);
console.log(`Circumference: ${myCircle.circumference.toFixed(2)}`);


//* =====================
//* 3. BEST PRACTICES
//* =====================

/*
 * When using getters/setters:
 * 1. Use private backing fields (_prefix convention)
 * 2. Add validation in setters
 * 3. Keep getters simple without side effects
 * 4. Use for computed/derived properties
 * 5. Document property behavior
*/