// Define the Product class
class Product {
  
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  // Method to calculate total value of the product
  calculateTotalValue() {
    return this.price * this.quantity;
  }

  // Method to apply a discount to the product price
  applyDiscount(discountPercentage) {
    let discount = (this.price * discountPercentage) / 100;
    this.price = this.price - discount;
  }

  // Method to restock the product
  restock(newQuantity) {
    this.quantity += newQuantity;
  }

  // Bonus: Method to check if the product is out of stock
  isOutOfStock() {
    return this.quantity === 0;
  }

  // Bonus: Method to display product details
  displayProductDetails() {
    console.log(`Product Name: ${this.name}`);
    console.log(`Price: $${this.price}`);
    console.log(`Quantity: ${this.quantity}`);
    console.log(`Total Value: $${this.calculateTotalValue()}`);
  }
}

// Create product objects
const product1 = new Product("Laptop", 900, 5);
const product2 = new Product("Smartphone", 700, 8);
const product3 = new Product("Shoes", 120, 15);

// Demonstrate functionality
console.log(
  `Total Value of ${product1.name}: $${product1.calculateTotalValue()}`
); // Output: 4500

product2.applyDiscount(10);
console.log(`Discounted Price of ${product2.name}: $${product2.price}`); // Output: 630

product3.restock(10);
console.log(`Updated Quantity of ${product3.name}: ${product3.quantity}`); // Output: 25

// Bonus: Check out of stock and display details
console.log(`Is ${product1.name} out of stock? ${product1.isOutOfStock()}`); // Output: false
product1.displayProductDetails();
