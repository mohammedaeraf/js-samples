// Define a class
class Rectangle {
  // Constructor method to initialize the properties
  constructor(length, width) {
    this.length = length; // Property: length of the rectangle
    this.width = width;   // Property: width of the rectangle
  }

  // Method to calculate the area of the rectangle
  calculateArea() {
    let area = this.length * this.width; // Area formula: length * width
    return area; // Return the calculated area
  }

  // Method to calculate the perimeter of the rectangle
  calculatePerimeter() {
    let perimeter = 2 * (this.length + this.width); // Perimeter formula: 2 * (length + width)
    return perimeter; // Return the calculated perimeter
  }
}

// Create an object of the class
const rect = new Rectangle(10, 5); // Create a rectangle with length 10 and width 5