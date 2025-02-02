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
  }  // end of class
  
  // Create objects of the class
  const rectangle1 = new Rectangle(10, 5);
  const rectangle2 = new Rectangle(50, 25);
  const rectangle3 = new Rectangle(5, 3);

  const rectangles = [];

  rectangles.push(rectangle1, rectangle2, rectangle3);
  
  printRectangles(rectangles);

  function printRectangles(rectangles) {
    for (const rectangle of rectangles) {
        console.log(`***** Printing Rectangle Info ******`);
        console.log(`Length - ${rectangle.length}`);
        console.log(`Width - ${rectangle.width}`);
        console.log(`Area - ${rectangle.calculateArea()}`);
        console.log(`Perimeter - ${rectangle.calculatePerimeter()}`);
        console.log(`------------------------\n`);
    }
  }

