/*
 * DEMONSTRATING CLASS INHERITANCE IN TYPESCRIPT
 * Shows parent-child class relationships with access modifiers
*/

//* ==============================
//* 1. ITEMS INHERITANCE EXAMPLE
//* ==============================

/*
 * Base class for items
 * @class
 * @property {string} name - Public item name
 * @property {string} brand - Public brand name
 * @property {protected number} price - Protected price (accessible to subclasses)
*/

class Items {
    public name: string;
    public brand: string;
    protected price: number;

    constructor(name: string, brand: string, price: number) {
        this.name = name;
        this.brand = brand;
        this.price = price;
    }

    getBrandName(): string {
        return `Brand name is: ${this.brand}`;
    }

    getDetails(): string {
        return `${this.name} by ${this.brand}`;
    }
}


/*
 * Smartphone class extending Items
 * @class
 * @extends Items
 * @property {string} color - Smartphone color
*/

class Smartphone extends Items {
    color: string;

    constructor(name: string, brand: string, price: number, color: string) {
        // Call the parent class constructor
        super(name, brand, price);

        this.color = color;
    }

    getPrice(): string {
        return `Price is: $${this.price}`;
    }

    // Overriding parent method
    getDetails(): string {
        return `${super.getDetails()} in ${this.color}`;
    }
}


const phone = new Smartphone("iPhone X", "Apple", 1000, "Black");

console.log('\nSmartphone:');
console.log(phone.getBrandName());
console.log(phone.getPrice());
console.log(phone.getDetails());
console.log('Color:', phone.color);


//* =================================
//* 2. EMPLOYEE INHERITANCE EXAMPLE
//* =================================

/*
 * Base employee class
 * @class
 * @property {string} name - Employee name
 * @property {string} department - Department name
 * @property {number} id - Employee ID
*/

class Employee {
    constructor(
        public name: string,
        public department: string,
        public id: number
    ) {}

    work(): string {
        return `${this.name} is working in ${this.department} department`;
    }
}


/*
 * Manager class extending Employee
 * @class
 * @extends Employee
 * @property {number} teamSize - Number of team members
*/

class Manager extends Employee {
    constructor(
        name: string,
        id: number,
        department: string,
        public teamSize: number
    ) {
        super(name, department, id);
    }

    meeting(): string {
        return `${this.name} is conducting a meeting with ${this.teamSize} team members`;
    }
}


/*
 * Developer class extending Employee
 * @class
 * @extends Employee
 * @property {string} language - Primary programming language
*/

class Developer extends Employee {
    constructor(
        name: string,
        id: number,
        department: string,
        public language: string
    ) {
        super(name, department, id);
    }

    writeCode(): string {
        return `${this.name} is writing code in ${this.language}`;
    }

    // Override work method with more specific behavior
    work(): string {
        return `${super.work()} as a ${this.language} developer`;
    }
}

console.log('\nEmployee Examples:');

const manager = new Manager("John Doe", 123, "HR", 10);
console.log(manager.work());                                            // Output: "John Doe is working in HR department"
console.log(manager.meeting());                                         // Output: "John Doe is conducting a meeting with 10 team members"


const developer = new Developer("Bob", 102, "IT", "TypeScript");
console.log(developer.work());                                          // Output: "Bob is working in IT department as a TypeScript developer"
console.log(developer.writeCode());                                     // Output: "Bob is writing code in TypeScript"