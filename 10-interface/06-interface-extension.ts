/*
 * DEMONSTRATING INTERFACE MERGING IN TYPESCRIPT
 * Shows how multiple interface declarations with the same name automatically merge
*/

//* ==============================
//* 1. BASIC INTERFACE MERGING
//* ==============================

// Initial Car interface declaration
interface Car1 {
    brand: string;
    start(): void;
}

// Extended Car interface (automatically merged)
interface Car1 {
    model: string;
    stop(): void;
    year?: number;                                  // Optional property
}

/*
 * Complete merged Car1 interface now has:
 * - brand
 * - model
 * - start()
 * - stop()
 * - year?
*/

const favCar: Car1 = {
    brand: "Mercedes",
    model: "G-Class",
    start() {
        console.log("🚗 Engine started");
    },
    stop() {
        console.log("🛑 Engine stopped");
    }
    // year is optional
};

console.log('Car Interface Merging:');
console.log(`Driving a ${favCar.brand} ${favCar.model}`);
favCar.start();
favCar.stop();


//* ===========================
//* 2. MERGING WITH METHODS
//* ===========================

// Initial User interface
interface UserSrj  {
    firstName: string;
    lastName: string;
}

// Extended User interface with methods
interface UserSrj  {
    age: number;
    printInfo(): string;
    greet?(message: string): string;                // Optional method
}

const userSrj: UserSrj  = {
    firstName: "Suraj",
    lastName: "Adhikari",
    age: 20,
    printInfo() {
        return `User: ${userSrj.firstName} ${userSrj.lastName}, Age: ${userSrj.age}`;
    }
};

console.log('\nUser Interface Merging:');
console.log(userSrj.printInfo());                   // Output: "User: Suraj Adhikari, Age: 20"


//* ===========================
//* 3. MERGING COMPLEX TYPES
//* ===========================

// Initial Settings interface
interface Settings {
    theme: 'light' | 'dark';
}

// Extended Settings interface
interface Settings {
    fontSize: number;
    readonly configId: string;                      // Readonly property
    advanced?: {
        analytics: boolean;
        logging: boolean;
    };
}

const appSettings: Settings = {
    theme: 'dark',
    fontSize: 14,
    configId: 'config-123',
    advanced: {
        analytics: true,
        logging: false
    }
};

console.log('\nSettings Interface Merging:');
console.log(`Current theme: ${appSettings.theme}, Font size: ${appSettings.fontSize}`);