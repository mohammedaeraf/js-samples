let isPrime = (n) => {
  let prime = true; // let's assume that number is prime

  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      prime = false; // number is not prime
      break;
    }
  }
  prime == true ? console.log("prime") : console.log("not prime");
};

isPrime(13);  //output: prime
isPrime(15);  //output: not prime
