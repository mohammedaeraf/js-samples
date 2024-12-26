// Fibonacci numbers less than 1000 (using while loop)
let first = 1;
let second = 1;
let sum = 0;

console.log(first);
console.log(second);

while (sum <=1000 ) {
    sum = first + second;
    if (sum >= 1000) break;
    console.log(sum);
    first = second;
    second = sum;
}
