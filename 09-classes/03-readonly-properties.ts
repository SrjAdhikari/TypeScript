/*
 * DEMONSTRATING READONLY PROPERTIES IN TYPESCRIPT CLASSES
 * Shows how to create immutable properties that can only be set during initialization
*/

//* ==============================
//* 1. BASIC READONLY PROPERTIES
//* ==============================

/*
 * Car class with readonly properties
 * @class
 * @property {readonly string} name - Immutable car name
 * @property {readonly string} model - Immutable car model
 * @property {number} year - Mutable manufacturing year
*/

class Car {
    readonly name: string;
    readonly model: string;
    year: number;

    constructor(name: string, model: string, year: number) {
        this.name = name;
        this.model = model;
        this.year = year;
    }

    // Method to updates the car's year
    updateYear(newYear: number): void {
        if (newYear > 1886) {
            this.year = newYear;
        }
    }
}

const car = new Car("G-Class", "G63", 2020);

console.log('Car:', car);                                   // Output: Car { name: 'G-Class', model: 'G63', year: 2020 }

// Attempting to modify readonly properties
// car.name = "E-Class";                                    // ❌ Error: Cannot assign to 'name' because it is read-only
// car.model = "G65";                                       // ❌ Error: Cannot assign to 'model' because it is read-only

// Modifying mutable property
car.year = 2022;                                            // ✅ Allowed
car.updateYear(2023);                                       // ✅ Allowed through method

console.log('Updated Car:', car);                           // Output: Car { name: 'G-Class', model: 'G63', year: 2023 }


//* =======================================
//* 2. READONLY WITH PARAMETER PROPERTIES
//* =======================================

// Compact syntax using parameter properties
class Vehicle {
    constructor(
        public readonly make: string,
        public readonly model: string,
        public year: number
    ) {}
}

const vehicle = new Vehicle("Toyota", "Camry", 2021);

console.log('\nVehicle:', vehicle.make, vehicle.model);     // Output: "Toyota Camry"
// vehicle.make = "Honda";                                  // ❌ Error: Cannot assign to 'make' because it is read-only