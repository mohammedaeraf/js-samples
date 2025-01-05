let fruits = ['apple', 'banana', 'mango', 'orange', 'grape', 'strawberry', 'watermelon', 'pineapple'];

// shift function
let firstFruit = fruits.shift();
console.log(firstFruit);
console.log(fruits);

// indexOf function
let position = fruits.indexOf('mango');
console.log(position);

// includes (check if the element is in the array)
console.log(fruits.includes('banana'));

let newFruits = fruits.slice(1, 4);
console.log(newFruits);

let students1 = ['Shawoor', 'Suhaim', 'Mugni'];
let students2 = ['Mohsin', 'Arshad Shaikh', 'Arshad Syed', 'Imran Syed'];
let allStudents = students1.concat(students2);
console.log(allStudents);

