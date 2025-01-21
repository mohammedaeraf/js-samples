// Array of product objects
// let product = {
//   name: "Laptop",
//   price: 1200,
//   stock: 5
// };

const products = [
  { name: "Laptop", price: 1199, stock: 5 },
  { name: "Mouse", price: 25, stock: 50 },
  { name: "Keyboard", price: 45, stock: 30 },
  { name: "Monitor", price: 300, stock: 8 },
  { name: "Printer", price: 150, stock: 15 },
];

// 1. Filter products with stock greater than 10
const filteredProducts = products.filter((product) => product.stock > 10);

// 2. Increase the price of the filtered products by 15%
const updatedProducts = filteredProducts.map((product) => {
  return {
    name: product.name,
    price: (product.price * 1.15).toFixed(2), // Increase price by 15%
    stock: product.stock,
  };
});

// Print the original array
console.log("Original Products:", products);

// Print the filtered array
console.log("Filtered Products (stock > 10):", filteredProducts);

// Print the updated array with increased prices
console.log("Updated Products with Increased Prices:", updatedProducts);
