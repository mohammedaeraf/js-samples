// Define a class
class Car {
  // properties
  brand;
  model;
  year;

  constructor(br, mo, yr) {
    this.brand = br; // Property: brand of the car
    this.model = mo; // Property: model of the car
    this.year = yr;
  }

  displayDetails() {
    console.log(`This car is a ${this.brand} ${this.model} ${this.year}.`);
  }

}

// Create an object of the class
let myCar = new Car("Toyota", "Corolla", "2025");
let car2 = new Car("BMW", "X5", "2021");

// Call the method to display car details
myCar.displayDetails();
car2.displayDetails();

