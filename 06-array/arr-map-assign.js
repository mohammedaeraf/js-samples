// const numbers = [4, 7, 12, 15, 9];

// const modifiedNumbers = numbers.map((num) => {
//   if (num % 2 === 0) {
//     return num * 2; // Double the even number
//   } else {
//     return num + 1; // Increment the odd number by 1
//   }
// });

// console.log(modifiedNumbers); // Output: [8, 8, 24, 16, 10]
// const numberDescriptions = numbers.map((num) => {
//   return num % 2 === 0 ? "Even" : "Odd"; // Check if number is even or odd
// });

// console.log(numberDescriptions); // Output: ["Even", "Odd", "Even", "Odd", "Odd"]



const numbers = [4, 7, 12, 15, 9];
const modifiedNumbers = numbers.map(n => n % 2 == 0 ? n * 2 : n + 1);
console.log(modifiedNumbers); 
const numberDescriptions = numbers.map( n => n % 2 === 0 ? "Even" : "Odd");
console.log(numberDescriptions); 
