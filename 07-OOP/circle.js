// Define a class
class Circle {
  // Constructor method to initialize the properties
  constructor(radius) {
    this.radius = radius; // Property: radius of the circle
  }

  // Method to calculate the area of the circle
  calculateArea() {
    return Math.PI * this.radius * this.radius; // Area formula: π * radius^2
  }

  // Method to calculate the circumference of the circle
  calculateCircumference() {
    return 2 * Math.PI * this.radius; // Circumference formula: 2 * π * radius
  }
}

// Create an object of the class
const circle = new Circle(7); // Create a circle with radius 7

// Perform calculations and log the results
console.log(`Area: ${circle.calculateArea().toFixed(2)}`); // Log the area, rounded to 2 decimal places
console.log(`Circumference: ${circle.calculateCircumference().toFixed(2)}`); // Log the circumference, rounded to 2 decimal places