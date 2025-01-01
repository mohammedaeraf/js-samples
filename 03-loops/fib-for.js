// Fibonacci Numbers
let first = 1;
let second = 1;
let sum = 0;

console.log(first);
console.log(second);

for (let i = 1; i <= 8; i++) {
    sum = first + second;
    console.log(sum);
    first = second;
    second = sum;
}


// Every number is a sum of previous two numbers except for 1st and 2nd
// 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610
// A1 - Print Fib in one line
// OUTPUT - First 10 fibonacci numbers are 1, 1, 2, 3...

// A2 - Print design below
// *
// **
// ***
// ****
// *****

// A3 - Print factorial of a number
// 5! = 1 * 2 * 3 * 4 * 5 = 120
