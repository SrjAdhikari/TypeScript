/*
 * DEMONSTRATING INTERFACES IN TYPESCRIPT
 * Shows how to define object shapes with required, optional, and readonly properties
*/

//* ====================================
//* 1. BASIC INTERFACE IMPLEMENTATION
//* ====================================

// Employee information interface
interface Information {
    name: string;
    age: number;
    id: number;
    salary: number;
}

// Creating an object that satisfies the Information interface
const employee: Information = {
    name: "SRJ",
    age: 22,
    id: 142,
    salary: 53412
};

console.log(`
    Employee Details:
    Name: ${employee.name}
    Age: ${employee.age}
    ID: ${employee.id}
    Salary: $${employee.salary.toLocaleString()}
`);

//* Output:
//  Employee Record:
//  Name: SRJ
//  Age: 22
//  ID: 142
//  Salary: $53,412


//* ====================================
//* 2. READONLY & OPTIONAL PROPERTIES
//* ====================================

// Movie interface with readonly and optional properties
interface Movie {
    readonly name: string;                      // Can't be modified after creation
    ratings: number;
    genre?: string;                             // Optional property (may be undefined)
}

// Creating a movie object with all properties
const movie: Movie = {
    name: "Star Wars",
    ratings: 9.0,
    genre: "Action"                             // Including optional property
};

// Attempting to modify readonly property
// movie.name = "Another Movie";                // ❌ Error: Cannot assign to 'name' because it is read-only

console.log('\nMovie with Genre:');
console.log(movie);                             // Output: { name: 'Star Wars', ratings: 9, genre: 'Action' }
console.log(`
    Movie Details:
    Title: ${movie.name}
    Rating: ${movie.ratings}
    Genre: ${movie.genre || 'Not specified'}
`);


// Creating movie without optional genre property
const anotherMovie: Movie = {
    name: "John Wick",
    ratings: 7.5                                // Omitting optional property "genre"
};

console.log('\nMovie Without Genre:');
console.log(anotherMovie);                      // Output: { name: 'John Wick', ratings: 7.5 }
console.log('Genre:', anotherMovie.genre);      // Output: undefined