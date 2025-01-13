// Define a class
class Product {
    // properties
    name;       // Property: name of the product
    price;      // Property: price of the product
    category;   // Property: category of the product
    brand;      // Property: brand of the product
    stock;      // Property: stock quantity of the product
  
    // Constructor method to initialize the properties
    constructor(n, p, c, b, s) {
      this.name = n;       // Initialize name
      this.price = p;      // Initialize price
      this.category = c;   // Initialize category
      this.brand = b;      // Initialize brand
      this.stock = s;      // Initialize stock quantity
    }
  
    // Method to print the details of the product
    printDetails() {
      console.log(`The product ${this.name} costs $${this.price}, category: ${this.category}, brand: ${this.brand}, stock: ${this.stock}.`); // Log the product details
    }
  }
  
  // Create an object of the class
  const product1 = new Product("Laptop", 999.99, "Electronics", "Dell", 50); // Create a product with name "Laptop", price 999.99, category "Electronics", brand "Dell", and stock 50
  
  // Call the method to print the details of the product
  product1.printDetails(); // Log the details of the product