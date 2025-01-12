let students = ["Shawoor", "Suhaim", "Mugni", "Mohsin", "Arshad Shaikh",  "Arshad Syed", "Imran Syed"];

// 1. for loop - iterate over the array using a traditional for loop
for (let i = 0; i < students.length; i++) {
    console.log(students[i]); // output each student's name
}

// 2. for-in loop - iterate over the array using a for-in loop (iterates over indices)
for (const i in students) {
    console.log(students[i]); // output each student's name
}

// 3. for-of loop - iterate over the array using a for-of loop (iterates over values)
let sales = [4000, 5600, 7000];
let totalSales = 0;
for (const sale of sales) {
    totalSales += sale; // accumulate the total sales
}
console.log(`Total sales = ${totalSales}`); // output the total sales

// 4. forEach loop - iterate over the array using the forEach method
totalSales = 0;
sales = [4000, 5600, 7000];
sales.forEach((sale, i) => {
    console.log(`Day ${i+1} Sales = ${sale}`); // output each day's sales
    totalSales += sale; // accumulate the total sales
});
console.log(totalSales); // output the total sales