let students = ["Shawoor", "Suhaim", "Mugni", "Mohsin", "Arshad Shaikh",  "Arshad Syed", "Imran Syed"];

// 1. for loop
for (let i = 0; i < students.length; i++) {
//   console.log(students[i]);
}

// 2. for-in loop
for (const i in students) {
    // console.log(students[i]);
}

// 3. for-of loop
let sales = [4000, 5600, 7000];
let totalSales = 0;
for (const sale of sales) {
    totalSales += sale;
}
console.log(`Total sales = ${totalSales}`);

// 4. forEach loop
totalSales = 0;

sales = [4000, 5600, 7000];
sales.forEach( (sale,i) => {
    console.log(`Day ${i+1} Sales = ${sale}`);
    totalSales += sale;
}
);
console.log(totalSales);

// console.log(`Total sales = ${totalSales}`);
