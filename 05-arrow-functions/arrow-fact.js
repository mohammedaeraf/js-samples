let printFact = (n) => {
  let fact = 1;
  for (let i = 2; i <= n; i++) {
    fact = fact * i;
  }
  console.log(`Factorial of ${n} = ${fact}`);
};

printFact(5); 
