/*
 * DEMONSTRATING INTERFACE WITH CLASS IN TYPESCRIPT
 * Shows how classes can implement interfaces to guarantee specific behavior
*/

//* ========================
//* 1. VEHICLE INTERFACE
//* ========================

/*
 * Vehicle interface defining required methods
 * @interface
 * @method start - Starts the vehicle
 * @method stop - Stops the vehicle
*/

interface Vehicle {
    start(): void;
    stop(): void;
    getStatus?(): string;                           // Optional method
}

//* ==============================
//* 2. BIKE CLASS IMPLEMENTATION
//* ==============================

// Bike class implementing Vehicle interface
class Bike implements Vehicle {
    private speed: number = 0;
    
    start(): void {
        this.speed = 10;
        console.log("🚲 Bike started. Current speed:", this.speed);
    }

    stop(): void {
        this.speed = 0;
        console.log("🛑 Bike stopped.");
    }
    
    // Gets bike status (additional method not in interface)
    getStatus(): string {
        return `Bike is ${this.speed > 0 ? 'moving' : 'stopped'}`;
    }
}

const bike = new Bike();

bike.start();                                       // Output: "🚲 Bike started. Current speed: 10"
bike.stop();                                        // Output: "🛑 Bike stopped."
console.log(bike.getStatus());                      // Output: "Bike is stopped"


//* ==============================
//* 3. CAR CLASS IMPLEMENTATION
//* ==============================

/*
 * Car class with additional features
 * @implements Vehicle
*/

class Car implements Vehicle {
    private isRunning: boolean = false;
    
    start(): void {
        this.isRunning = true;
        console.log("🚗 Car engine started. Vroom vroom!");
    }
    
    stop(): void {
        this.isRunning = false;
        console.log("🛑 Car engine stopped.");
    }
    
    // Additional method not in interface
    honk(): void {
        console.log("🔊 Honk honk!");
    }
}

const car = new Car();

car.start();                                        // Output: "🚗 Car engine started. Vroom vroom!"
car.honk();                                         // Output: "🔊 Honk honk!"
car.stop();                                         // Output: "🛑 Car engine stopped."


//* =======================================
//* 4. MULTIPLE INTERFACE IMPLEMENTATION
//* =======================================

interface GPS {
    getLocation(): [number, number];
}

interface Radio {
    playStation(frequency: number): void;
}

class SmartCar implements Vehicle, GPS, Radio {
    start() { 
        console.log("Smart car started"); 
    }

    stop() { 
        console.log("Smart car stopped"); 
    }

    getLocation(): [number, number] { 
        return [40.7128, -74.0060]; 
    }

    playStation(freq: number) { 
        console.log(`Playing station at ${freq}MHz`); 
    }
}

const smartCar = new SmartCar();

console.log('\nSmart Car Location:', smartCar.getLocation());
smartCar.playStation(98.7);