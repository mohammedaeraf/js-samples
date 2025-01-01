// normal function to calculate square
function square(n) {
  return n * n;
}

// arrow function to calculate square
let squareA = n => n * n;
console.log(squareA(5));  // calling arrow function



// arrow function to calculate area of a rectangle
let areaRect = (l, b) => {
    console.log(`Area of rectange (${l}, ${b}) is ${l * b}`);
}

areaRect(10,20); // calling arrow function
    


// arrow function to calculate square
let calcFact = (n) => {
  let fact = 1;
  for (let i = 2; i <= n; i++) {
    fact = fact * i;
  }
  console.log(`Factorial of ${n} = ${fact}`);
};

calcFact(5); // calling arrow function



function greet() {
    console.log('Hello Buddy!');
}

let greetArrow = () => console.log('Hello Buddy!');

greetArrow();
