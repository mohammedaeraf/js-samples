// Initialize an array with some fruits
let fruits = ['apple', 'banana', 'mango', 'orange', 'grapes'];

// push function - add element at the end of the array
fruits.push('kiwi'); // adds 'kiwi' to the end of the array
fruits.push('papaya'); // adds 'papaya' to the end of the array
console.log(fruits); // outputs the updated array with 'kiwi' and 'papaya'

// pop function - remove the last element from the array
let lastFruit = fruits.pop(); // removes 'papaya' from the end of the array
console.log(lastFruit); // outputs 'papaya'
console.log(fruits); // outputs the updated array without 'papaya'

// unshift function - add element at the beginning of the array
fruits.unshift('watermelon'); // adds 'watermelon' to the beginning of the array
console.log(fruits); // outputs the updated array with 'watermelon' at the beginning