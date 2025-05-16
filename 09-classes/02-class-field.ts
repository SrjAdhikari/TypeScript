/*
 * DEMONSTRATING CLASS FIELDS IN TYPESCRIPT
 * Shows initialization, type annotations
*/

//* ========================
//* 1. BASIC CLASS FIELDS
//* ========================

/*
 * Player class demonstrating class fields
 * @class
 * @property {string} firstName - Player's first name
 * @property {string} lastName - Player's last name
 * @property {number} score - Player's score (initialized to 50)
*/

class Player {
    // Declared fields with type annotations
    firstName: string;
    lastName: string;
    
    // Field with default value
    score: number = 50;                                 // Class field initialized to 50
    
    constructor(first: string, last: string) {
        this.firstName = first;
        this.lastName = last;
    }
}

const player1 = new Player("Suraj", "Adhikari");

console.log(player1);                                   // Output: Player { score: 50, firstName: 'Suraj', lastName: 'Adhikari' }
console.log('Score:', player1.score);                   // Output: 50


//* ========================
//* 2. FIELD INITIALIZATION
//* ========================

class Game {
    // Direct initialization
    title: string = "Unknown Game";
    
    // Initialized in constructor
    players: Player[];
    
    // Readonly field (must be initialized)
    readonly createdAt: Date;
    
    constructor() {
        this.players = [];
        this.createdAt = new Date();
    }
}

const myGame = new Game();

console.log('\nGame:', myGame.title);
console.log('Created:', myGame.createdAt.toLocaleDateString());