/*
 * DEMONSTRATING GENERICS CLASS IN TYPESCRIPT
 * Shows type-safe generic containers that can work with multiple types
*/

//* ===========================
//* 1. SIMPLE GENERIC CLASS
//* ===========================

// Declaring a generic class that holds content of specified type
class Box<T> {
    private content: T;

    // Creates a new Box instance
    constructor(initialContent: T) {
        this.content = initialContent;
    }

    // Retrieves the current content of the box
    getContent(): T {
        return this.content;
    }

    // Updates the content of the box
    setContent(newContent: T): void {
        this.content = newContent;
    }
}

// String Box Example
const strBox = new Box<string>("Square Box");
console.log('Initial box content:', strBox.getContent());               // Output: "Square Box"

strBox.setContent("Rectangular Box");
console.log('Updated box content:', strBox.getContent());               // Output: "Rectangular Box"


// Number Box Example
const numBox = new Box<number>(20);
console.log('Initial number content:', numBox.getContent());            // Output: 20

numBox.setContent(200);
console.log('Updated number content:', numBox.getContent());            // Output: 200


//* =================================
//* 2. MULTI-PROPERTY GENERIC CLASS
//* =================================

// A generic class with three dimensions of the same type
class Container<T> {
    height: T;
    width: T;
    depth: T;

    // Creates a new Container instance
    constructor(height: T, width: T, depth: T) {
        this.height = height;
        this.width = width;
        this.depth = depth;
    }

    // Gets the container height
    getHeight(): T {
        return this.height;
    }

    // Gets the container width
    getWidth(): T {
        return this.width;
    }

    // Gets the container depth
    getDepth(): T {
        return this.depth;
    }
}

// Number Container Example
const container1 = new Container<number>(10, 50, 100);
console.log('Number Container - Height:', container1.getHeight());      // Output: 10
console.log('Number Container - Width:', container1.getWidth());        // Output: 50
console.log('Number Container - Depth:', container1.getDepth());        // Output: 100


// String Container Example
const container2 = new Container<string>("Ten", "Fifty", "Hundred");
console.log('String Container - Height:', container2.getHeight());      // Output: "Ten"
console.log('String Container - Width:', container2.getWidth());        // Output: "Fifty"
console.log('String Container - Depth:', container2.getDepth());        // Output: "Hundred"