let first = 1;
let second = 1;
let sum = 0;

console.log(first);
console.log(second);
// 1 1 2 3 5 8 13 21 34 55 89 
for (; sum <=1000; ) {
    sum = first + second;
    if (sum > 1000) break;
    console.log(sum);
    first = second;
    second = sum;
}
