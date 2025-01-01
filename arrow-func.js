// normal function
function square(n) {
  return n * n;
}

let squareA = n => n * n;

// console.log(squareA(5));
// console.log(squareA(5));

let areaRect = (l, b) => {
    console.log(`Area of rectange (${l}, ${b}) is ${l * b}`);
}
areaRect(10,20)
    


let calcFact = (n) => {
  let fact = 1;
  for (let i = 2; i <= n; i++) {
    fact = fact * i;
  }
  console.log(`Factorial of ${n} = ${fact}`);
};

// calcFact(5);



function greet() {
    console.log('Hello Buddy!');
}

let greetArrow = () => console.log('Hello Buddy!');

greetArrow();
