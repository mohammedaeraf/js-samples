// determines if a number is prime and returns true or false
function isPrime(n) {
    let prime = true; // let's assume that number is prime

    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            prime = false;  // number is not prime
            break;
        }
    }
    return prime;
  
}

let n = 13;
let result = isPrime(n); // calling isPrime() function and passing n
if (result == true) {
    console.log(`${n} is a prime number`);
}
else {
    console.log(`${n} is not a prime number`);
}

// using ternary
isPrime(n) ? console.log(`${n} is prime`) : console.log(`${n} isnt prime`);
