// Initialize an array of product objects with name, price, and quantity properties
const products = [
  { name: "Laptop", price: 900, quantity: 3 },
  { name: "Smartphone", price: 700, quantity: 6 },
  { name: "Shoes", price: 120, quantity: 8 },
  { name: "Watch", price: 200, quantity: 4 },
  { name: "Fridge", price: 500, quantity: 10 }
];

// Use map() to create discountedProducts array
const discountedProducts = products.map(product => {
  if (product.quantity > 5) {
      // Apply a 10% discount if quantity is greater than 5
      const discountedPrice = product.price * 0.9;
      return { ...product, price: discountedPrice }; // Return new object with discounted price
  }
  return product; // No discount applied if quantity is less than or equal to 5
});

// Output the array of products with applied discounts to the console
console.log(discountedProducts);