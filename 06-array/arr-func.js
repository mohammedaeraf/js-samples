let fruits = ['apple', 'banana', 'mango', 'orange', 'grapes'];

// push function - add element at the end of the array
fruits.push('kiwi');
fruits.push('papaya');
console.log(fruits);

// pop function - remove the last element from the array
let lastFruit = fruits.pop();
console.log(lastFruit);
console.log(fruits);

// unshift function - add element at the beginning of the array
fruits.unshift('watermelon');
console.log(fruits);

// shift function - remove the first element from the array
let firstFruit = fruits.shift();
console.log(firstFruit);
console.log(fruits);

// indexOf function - find the index of the element in the array
let position = fruits.indexOf('mango');
console.log(position);

// includes function - check if the element is present in the array
console.log(fruits.includes('banana'));

// slice function - get the part of the array
let newFruits = fruits.slice(1, 4);
console.log(newFruits);

// concat function - merge two arrays
let students1 = ['Shawoor', 'Suhaim', 'Mugni'];
let students2 = ['Mohsin', 'Arshad Shaikh', 'Arshad Syed', 'Imran Syed'];
let allStudents = students1.concat(students2);
console.log(allStudents);

