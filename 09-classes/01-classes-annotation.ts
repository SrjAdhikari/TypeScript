/*
 * DEMONSTRATING CLASS ANNOTATIONS IN TYPESCRIPT
 * Shows class properties, methods
*/

//* ==============================
//* CLASS WITH TYPE ANNOTATIONS
//* ==============================

/*
 * Human class representing a person
 * @class
 * @property {string} name - The person's name
 * @property {number} age - The person's age in years
*/

class Human {
    // Type annotations for class properties
    name: string;
    age: number;

    /*
     * Creates a new Human instance
     * @param {string} name - The person's name
     * @param {number} age - The person's age
    */

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    /*
     * Greets the person
     * @returns {string} A greeting message
    */

    greet(): string {
        return `Hello, my name is ${this.name} and I'm ${this.age} years old.`;
    }
}

// Creating an instance
const human = new Human("John", 30);
console.log(human);                                 // Output: Human { name: 'human', age: 30 }


// Accessing properties
console.log(`Name: ${human.name}`);                 // Output: "Name: John"
console.log(`Age: ${human.age}`);                   // Output: "Age: 30"


// Calling methods
console.log(human.greet());                         // Output: "Hello, my name is John and I'm 30 years old."


// Modifying properties
human.name = "Suraj";
human.age = 20;

console.log(`Updated Name: ${human.name}`);         // Output: "Updated Name: Suraj"
console.log(`Updated Age: ${human.age}`);           // Output: "Updated Age: 20"