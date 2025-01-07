// Define a class
class Circle {
    constructor(radius) {
      this.radius = radius; // Property: radius of the circle
    }
  
    calculateArea() {
      return Math.PI * this.radius * this.radius;
    }
  
    calculateCircumference() {
      return 2 * Math.PI * this.radius;
    }
  }
  
  // Create an object of the class
  const circle = new Circle(7);
  
  // Perform calculations
  console.log(`Area: ${circle.calculateArea().toFixed(2)}`);        // Area: 153.94
  console.log(`Circumference: ${circle.calculateCircumference().toFixed(2)}`); // Circumference: 43.98
  