// Define a class
class Rectangle {
    constructor(length, width) {
      this.length = length; // Property: length of the rectangle
      this.width = width;   // Property: width of the rectangle
    }
  
    calculateArea() {
      let area = this.length * this.width;
      return area;
    }
  
    calculatePerimeter() {
      let perimeter = 2 * (this.length + this.width);
      return perimeter;
    }
  }
  
  // Create an object of the class
  const rect = new Rectangle(10, 5);
  
  // Perform calculations
  console.log(`Area: ${rect.calculateArea()}`);        // Area: 50
  console.log(`Perimeter: ${rect.calculatePerimeter()}`); // Perimeter: 30
  