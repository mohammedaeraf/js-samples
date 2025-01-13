// Initialize an array with some fruits
let fruits = ['apple', 'banana', 'mango', 'orange', 'grapes'];

// Output the entire fruits array to the console
console.log(fruits);

// Output the first fruit in the array to the console
console.log(fruits[0]);

// Get the number of fruits in the array
let fruitsCount = fruits.length;

// Output the number of fruits to the console
console.log(fruitsCount);

// Output a header for the fruits list
console.log('******* Fruits ********');

// Loop through each fruit in the array and output its index and value
for (let i = 0; i < fruits.length; i++) {
    console.log(`Fruit #${i+1} - ${fruits[i]}`);    
}