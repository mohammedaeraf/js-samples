// Initialize an array with some numbers
const numbers = [4, 7, 12, 15, 9];

// Use the map function to create a new array with modified numbers
const modifiedNumbers = numbers.map((num) => {
  // If the number is even, double it
  if (num % 2 === 0) {
    return num * 2; 
  } else {
    // If the number is odd, increment it by 1
    return num + 1; 
  }
});

// Output the modified numbers to the console
console.log(modifiedNumbers); 

// Use the map function to create a new array with descriptions of the numbers
const numberDescriptions = numbers.map((num) => {
  // Check if the number is even or odd and return the corresponding string
  return num % 2 === 0 ? "Even" : "Odd"; 
});

// Output the number descriptions to the console
console.log(numberDescriptions); // Output: ["Even", "Odd", "Even", "Odd", "Odd"]