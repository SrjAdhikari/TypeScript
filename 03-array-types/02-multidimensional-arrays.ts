/*
 * DEMONSTRATING MULTI-DIMENSIONAL ARRAYS IN TYPESCRIPT
 * Shows type annotations for arrays with multiple dimensions
 * Includes both bracket and generic syntax options
*/

//* ===========================
//* 1. SINGLE DIMENSION ARRAY
//* ===========================

// One-dimensional number array
const singleDim: number[] = [1, 2, 3, 4, 5];

console.log('Single dimension array:', singleDim);
console.log('Access element:', singleDim[2]);


//* ===========================
//* 2. TWO DIMENSIONAL ARRAY
//* ===========================

// Two-dimensional number array (array of arrays)
const multiDim: number[][] = [[1, 2, 3, 4, 5]];

console.log('\nTwo-dimensional array:', multiDim);
console.log('Access element:', multiDim[0][1]);


// Practical 2D array example (matrix)
const matrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log('Matrix example:', matrix);
console.log('Matrix element at [1][2]:', matrix[1][2]);


//* ===========================
//* 3. THREE DIMENSIONAL ARRAY
//* ===========================

// Three-dimensional number array
const tripleDim: number[][][] = [[[1, 2, 3, 4, 5]]];

console.log('\nThree-dimensional array:', tripleDim);
console.log('Access element:', tripleDim[0][0][2]);


// Practical 3D array example (RGB color cube)
const colorCube: number[][][] = [
    [[255, 0, 0], [0, 255, 0], [0, 0, 255]],                    // Red, Green, Blue
    [[255, 255, 0], [255, 0, 255], [0, 255, 255]],              // Yellow, Magenta, Cyan
    [[255, 255, 255], [0, 0, 0], [128, 128, 128]]               // White, Black, Gray
];

console.log('Color cube example:', colorCube);
console.log('Magenta color values:', colorCube[1][1]);          // Output: [255, 0, 255]


//* ==============================
//* 4. ALTERNATE GENERIC SYNTAX
//* ==============================

/*
 * Two-dimensional array using generic syntax
 * @type {Array<Array<number>>} - Equivalent to number[][]
*/

const multiArray: Array<Array<number>> = [
    [11, 22, 33],
    [44, 55, 66]
];

console.log('\nGeneric syntax 2D array:', multiArray);
console.log('Access element:', multiArray[1][0]);


// Generic syntax for 3D array
const tripleArray: Array<Array<Array<number>>> = [
    [[1.1, 1.2], [1.3, 1.4]],
    [[2.1, 2.2], [2.3, 2.4]]
];

console.log('Generic syntax 3D array:', tripleArray);


//* ========================
//* 5. TYPE SAFETY EXAMPLES
//* ========================

//* TypeScript prevents these invalid operations:
// singleDim.push("6");                                         // ❌ Can't add string to number[]
// multiDim.push([1, "2", 3]);                                  // ❌ Can't mix types in number[][]
// tripleDim[0][0].push(true);                                  // ❌ Can't add boolean to number[]


//* These would also be invalid:
// const invalidMatrix: number[][] = [1, 2, 3];                 // ❌ Must be array of arrays
// const invalidCube: number[][][] = [[1, 2, 3]];               // ❌ Needs three levels


//* ======================== 
//* 6. PRACTICAL USE CASES
//* ========================      

// Game board (2D array)
const ticTacToe: Array<'X' | 'O' | ''>[] = [
    ['X', 'O', ''],
    ['', 'X', 'O'],
    ['O', '', 'X']
];


// 3D spatial data
const spatialData: number[][][] = [
    [[1, 2], [3, 4]],
    [[5, 6], [7, 8]]
];

console.log('\nPractical examples:');

console.log('Tic Tac Toe board:', ticTacToe);
console.log('Spatial data:', spatialData);