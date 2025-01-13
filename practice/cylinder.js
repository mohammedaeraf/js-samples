// Define a class
class Cylinder {
    // properties
    radius; // Property: radius of the cylinder
    height; // Property: height of the cylinder
  
    // Constructor method to initialize the properties
    constructor(r, h) {
      this.radius = r;   // Initialize radius
      this.height = h;   // Initialize height
    }
  
    // Method to calculate the volume of the cylinder
    calculateVolume() {
      return Math.PI * this.radius * this.radius * this.height; // Volume formula: π * radius^2 * height
    }
  
    // Method to calculate the surface area of the cylinder
    calculateSurfaceArea() {
      return 2 * Math.PI * this.radius * (this.radius + this.height); // Surface area formula: 2 * π * radius * (radius + height)
    }
  }
  
  // Create an object of the class
  const cylinder = new Cylinder(7, 10); // Create a cylinder with radius 7 and height 10
  
  // Perform calculations and log the results
  console.log(`Volume: ${cylinder.calculateVolume().toFixed(2)}`); // Log the volume, rounded to 2 decimal places
  console.log(`Surface Area: ${cylinder.calculateSurfaceArea().toFixed(2)}`); // Log the surface area, rounded to 2 decimal places