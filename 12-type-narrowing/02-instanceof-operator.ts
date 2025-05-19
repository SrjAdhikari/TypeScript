/*
 * DEMONSTRATING TYPE NARROW USING THE INSTANCEOF OPERATOR IN TYPESCRIPT
 * Shows how to narrow types using the instanceof operator
*/

//* ========================
//* 1. CLASS DEFINITIONS
//* ========================

class Dog {
    bark(): void {
        console.log("Woof Woof!");
    }
}

class Cat {
    meow(): void {
        console.log("Meow Meow!");
    }
}


//* ========================
//* 2. TYPE GUARD FUNCTION
//* ========================

// function TO Makes appropriate animal sound based on instance type
function animalSound(animal: Dog | Cat): void {
    if (animal instanceof Dog) {
      // Within this block, TypeScript knows that 'animal' is an instance of Dog
        animal.bark();
    } else {
      // Within this block, TypeScript knows that 'animal' is an instance of Cat
        animal.meow();
    }
}


//* ========================
//* 3. USAGE EXAMPLES
//* ========================

// Create instances
const myDog = new Dog();
const myCat = new Cat();


// Demonstrate type guarding
animalSound(myDog);                         // Output: "Woof Woof!"
animalSound(myCat);                         // Output: "Meow Meow!"