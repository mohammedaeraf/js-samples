// Initialize an empty array to store Fibonacci numbers
let fibNos = [];

// Loop from 0 to 10 to generate the first 11 Fibonacci numbers
for (let i = 0; i <= 10; i++) {
    // Use ternary operator to add the appropriate Fibonacci number to the array
    // If i is 0 or 1, add i directly to the array
    // Otherwise, add the sum of the previous two numbers in the array
    fibNos.push(i == 0 || i == 1 ? i : fibNos[i-1] + fibNos[i-2]);
}

// Output the generated Fibonacci numbers to the console
console.log(fibNos); // outputs - 0 1 1 2 3 5 8 13 21 34 55