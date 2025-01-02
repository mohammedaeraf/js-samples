let sales = [];
sales.push(1000, 2000, 3000);
sales.unshift(500);

let lastSales = sales.pop();
console.log(`Last element =>` + lastSales);
// sales.push(1000);


let totalSales = 0;

for (let i = 0; i < sales.length; i++) {
    totalSales = totalSales + sales[i];
    console.log(totalSales);
}
console.log(sales);
console.log();
console.log(`Total sales = ${totalSales}`);