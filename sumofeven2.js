// program to calculate sum of even numbers from 1 till 10

let sum = 0;
let remainder;
let str = 'Sum of ';

for(let i = 1; i <= 10; i++) {
    remainder = i % 2;
    if (remainder == 0) {
        // number is even
        // console.log(i);
        str = str + i + ' '
        sum = sum + i;
    }
}
str = str + 'is ' + sum;
console.log(str);