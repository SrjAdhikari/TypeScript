/*
 * DEMONSTRATING INTERFACE EXTENDS IN TYPESCRIPT
 * Shows how to extend interfaces and combine multiple interfaces
*/

//* ==============================
//* 1. BASIC INTERFACE EXTENDS
//* ==============================

// Base movie information interface
interface MovieInfo {
    name: string;
    price: number;
    ratings: number;
    printInfo(): string;
}

// Extended movie interface with genre
interface MovieGenre extends MovieInfo {
    genre: string;
}

const starWars: MovieGenre = {
    name: "Star Wars",
    price: 120,
    ratings: 9.0,
    genre: "Sci-Fi",
    printInfo() {
        return `
            Movie Information:
            Title: ${this.name}
            Price: $${this.price}
            Rating: ${this.ratings}/10
            Genre: ${this.genre}
        `;
    }
};

console.log(starWars.printInfo());

//* Output:
// Movie Information:
// Title: Star Wars
// Price: $120
// Rating: 9/10
// Genre: Sci-Fi


//* =================================
//* 2. MULTIPLE INTERFACE EXTENDS
//* =================================

// Address information interface
interface Address {
    city: string;
    street: string;
    postalCode?: string;                                    // Optional property
}

// Contact information interface
interface Contact {
    phone: string;
    email: string;
}

// Extended User interface combining Address and Contact
interface User extends Address, Contact {
    name: string;
    age: number;
}

const currentUser: User = {
    name: "superuser",
    age: 30,
    city: "Metropolis",
    street: "123 Main St",
    email: "user@example.com",
    phone: "123-456-7890"
};

console.log('\nUser Information:');
console.log(`
    Name: ${currentUser.name}
    Age: ${currentUser.age}
    Address: ${currentUser.street}, ${currentUser.city}
    Contact: ${currentUser.phone} | ${currentUser.email}
`);


//* ==============================
//* 3. COMPLEX INTERFACE EXTENDS
//* ==============================

// Engine specifications interface
interface Engine {
    horsepower: number;
    type: 'gasoline' | 'diesel' | 'electric' | 'hybrid';
    cylinders?: number;                                     // Optional for electric vehicles
}

// Wheel specifications interface
interface Wheels {
    count: number;                                          // Typically 4 for cars
    diameter: number;
    material?: string;
}

// Complete car interface combining multiple interfaces
interface FavCar extends Engine, Wheels {
    brand: string;
    model: string;
    year: number;
    getSpecs(): string;
}

const dreamCar: FavCar = {
    brand: "Mercedes",
    model: "G-Wagon",
    year: 2023,
    horsepower: 500,
    type: "diesel",
    cylinders: 8,
    count: 4,
    diameter: 20,
    material: "alloy",
    getSpecs() {
        return `
            ${this.year} ${this.brand} ${this.model}
            Engine: ${this.horsepower}HP ${this.type} ${this.cylinders ? this.cylinders + 'cyl' : ''}
            Wheels: ${this.count}x ${this.diameter}" ${this.material || ''}
        `;
    }
};

console.log('\nCar Specifications:');
console.log(dreamCar.getSpecs());

//* Output:
// 2023 Mercedes G-Wagon
// Engine: 500HP diesel 8cyl
// Wheels: 4x 20" alloy