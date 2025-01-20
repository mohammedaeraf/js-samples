// Initialize an array with some numbers
const numbers = [4, 7, 12, 15, 9];

// Use the map function with a ternary operator to create a new array with modified numbers
const modifiedNumbers = numbers.map(n => 
    // If the number is even, double it; otherwise, increment it by 1
    n % 2 == 0 ? n * 2 : n + 1
);
console.log(modifiedNumbers); // Output: [8, 8, 24, 16, 10]

// Use the map function with a ternary operator to create a new array with descriptions of the numbers
const numberDescriptions = numbers.map(n => 
    // Check if the number is even or odd and return the corresponding string
    n % 2 === 0 ? "Even" : "Odd"
);
console.log(numberDescriptions); // Output: ["Even", "Odd", "Even", "Odd", "Odd"]