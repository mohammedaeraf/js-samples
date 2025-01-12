let isPrime = (n) => {
  let prime = true; // let's assume that number is prime

  for (let i = 2; i < n; i++) {
    let remainder = n % i;
    console.log(`Dividing ${n} by ${i} gives remainder ${remainder}`);
    if (n % i == 0) {
      console.log(`Remainder is 0, so ${n} is not prime.. breaking the loop`);
      prime = false; // number is not prime
      break;
    }
  }
  prime == true ? console.log("prime") : console.log("not prime");
};

isPrime(23);  //output: not prime
