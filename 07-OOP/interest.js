// Define a class
class SimpleInterest {
    constructor(principal, rate, time) {
      this.principal = principal; // Property: principal amount
      this.rate = rate;           // Property: annual interest rate
      this.time = time;           // Property: time in years
    }
  
    calculateInterest() {
      return (this.principal * this.rate * this.time) / 100;
    }
  
    calculateTotalAmount() {
      return this.principal + this.calculateInterest();
    }
  }
  
  // Create an object of the class
  const investment = new SimpleInterest(1000, 5, 2);
  
  // Perform calculations
  console.log(`Simple Interest: ${investment.calculateInterest()}`); // Simple Interest: 100
  console.log(`Total Amount: ${investment.calculateTotalAmount()}`); // Total Amount: 1100
  