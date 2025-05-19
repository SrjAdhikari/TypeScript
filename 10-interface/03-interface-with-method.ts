/*
 * DEMONSTRATING INTERFACES WITH METHODS IN TYPESCRIPT
 * Shows interfaces with function signatures and their implementations
*/

//* ========================
//* 1. PERSON INTERFACE
//* ========================

// Person interface with method signature
interface Person {
    firstname: string;
    lastname: string;
    age: number;
    sayHello(): void;
}

// Function to greets a person and invokes their sayHello method
function greet(person: Person): void {
    console.log(`Hello, ${person.firstname} ${person.lastname}`);
    person.sayHello();
}

// Person object with method implementation
const srj: Person = {
    firstname: "Srj",
    lastname: "Adhikari",
    age: 20,
    sayHello() {
        console.log("Hello, there!");
    },
}


// Another person with different method implementation
const suraj: Person = {
    firstname: "Suraj",
    lastname: "Adhikari",
    age: 22,
    sayHello() {
        console.log("What's going on?");
    },
}

// Calling greet function

greet(srj);
//* Output:
// Hello, Srj Adhikari
// Hello, there!


greet(suraj);
//* Output:
// Hello, Suraj Adhikari
// What's going on?


//* ========================
//* 2. SONG INTERFACE
//* ========================

// Song interface with method signature
interface Song {
    name: string;
    singer: string;
    printSongInfo(): string;
}

// Song object with method implementation
const song: Song = {
    name: "Natural",
    singer: "Imagine Dragons",
    printSongInfo() {
        return `Song: ${this.name}, Singer: ${this.singer}`;
    },
}

console.log(song.printSongInfo());
// Output: Song: Natural, Singer: Imagine Dragons