// program to calculate sum of odd numbers from 1 till 10
let sum = 0;
let remainder;

for(let i = 1; i <= 10; i++) {
    remainder = i % 2;
    if (remainder != 1) {
        continue;
    }
    console.log(`i = ${i}`);
    sum = sum + i;
}
console.log(`Sum = ${sum}`);