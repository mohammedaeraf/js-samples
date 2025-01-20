// Define a class
class Triangle {
    // properties
    base;   // Property: base of the triangle
    height; // Property: height of the triangle
    sideA;  // Property: side A of the triangle
    sideB;  // Property: side B of the triangle
    sideC;  // Property: side C of the triangle
  
    // Constructor method to initialize the properties
    constructor(b, h, a, b, c) {
      this.base = b;   // Initialize base
      this.height = h; // Initialize height
      this.sideA = a;  // Initialize side A
      this.sideB = b;  // Initialize side B
      this.sideC = c;  // Initialize side C
    }
  
    // Method to calculate the area of the triangle
    calculateArea() {
      return 0.5 * this.base * this.height; // Area formula: 0.5 * base * height
    }
  
    // Method to calculate the perimeter of the triangle
    calculatePerimeter() {
      return this.sideA + this.sideB + this.sideC; // Perimeter formula: sideA + sideB + sideC
    }
  }
  
  // Create an object of the class
  const triangle = new Triangle(10, 5, 7, 8, 9); // Create a triangle with base 10, height 5, and sides 7, 8, 9
  
  // Perform calculations and log the results
  console.log(`Area: ${triangle.calculateArea().toFixed(2)}`); // Log the area, rounded to 2 decimal places
  console.log(`Perimeter: ${triangle.calculatePerimeter().toFixed(2)}`); // Log the perimeter, rounded to 2 decimal places