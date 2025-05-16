/*
 * DEMONSTRATING ACCESS MODIFIERS IN TYPESCRIPT
 * Shows public, private, and protected visibility levels
*/

//* ===========================
//* 1. BASIC ACCESS MODIFIERS
//* ===========================

/*
 * Vehicle class demonstrating access modifiers
 * @class
 * @property {public string} name - Publicly accessible
 * @property {private string} brand - Only accessible within class
 * @property {protected number} speed - Accessible within class and subclasses
*/

class Vehicle {
    // Public by default (explicitly shown here)
    public name: string;
    
    // Private - only accessible within this class
    private brand: string;
    
    // Protected - accessible in this class and subclasses
    protected speed: number;

    constructor(name: string, brand: string, speed: number) {
        this.name = name;
        this.brand = brand;
        this.speed = speed;
    }

    // Public method to access private property
    public getBrandName(): string {
        return `Brand is: ${this.brand}`;               // Can access private member
    }

    // Public method to access protected property
    public getSpeed(): string {
        return `Current speed: ${this.speed} km/h`;     // Can access protected member
    }

    // Private method - only callable within class
    private logDetails(): void {
        console.log(`Vehicle: ${this.name}, Brand: ${this.brand}`);
    }
}

const car1 = new Vehicle("G-Wagon", "Mercedes", 200);

// Accessing public member
console.log('Vehicle name:', car1.name);                // Output: "G-Wagon"


// Attempting to access private member
// console.log(car1.brand);                             // ❌ Error: Property 'brand' is private


// Accessing private property via public method
console.log(car1.getBrandName());                       // Output: "Brand is: Mercedes"


// Attempting to access protected member
// console.log(car1.speed);                             // ❌ Error: Property 'speed' is protected


// Accessing protected property via public method
console.log(car1.getSpeed());                           // Output: "Current speed: 200 km/h"


// Attempting to call private method
// car1.logDetails();                                   // ❌ Error: Property 'logDetails' is private