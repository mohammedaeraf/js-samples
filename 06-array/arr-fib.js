// Initialize an empty array to store Fibonacci numbers
let fibNos = [];

// Loop from 0 to 10 to generate the first 11 Fibonacci numbers
for (let i = 0; i <= 10; i++) {
    // For the first two numbers (0 and 1), add them directly to the array
    if(i == 0 || i == 1) 
        fibNos.push(i);
    else 
        // For subsequent numbers, add the sum of the previous two numbers
        fibNos.push(fibNos[i-1] + fibNos[i-2]);
}

// Output the generated Fibonacci numbers to the console
console.log(fibNos); // outputs - 0 1 1 2 3 5 8 13 21 34 55