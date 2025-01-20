// Define a class
class Car {
  // properties
  brand; // Property: brand of the car
  model; // Property: model of the car
  year;  // Property: year of the car

  // Constructor method to initialize the properties
  constructor(br, mo, yr) {
    this.brand = br; // Initialize brand
    this.model = mo; // Initialize model
    this.year = yr;  // Initialize year
  }

  // Method to display the details of the car
  displayDetails() {
    console.log(`This car is a ${this.brand} ${this.model} ${this.year}.`); // Log the car details
  }
}

// Create an object of the class
let myCar = new Car("Toyota", "Corolla", "2025"); // Create a car with brand "Toyota", model "Corolla", and year "2025"

// Display the details of the car
myCar.displayDetails(); // Call the method to display the car details