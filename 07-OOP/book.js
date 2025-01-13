// Define a class
class Book {
  // properties
  title;  // Property: title of the book
  author; // Property: author of the book

  // Constructor method to initialize the properties
  constructor(t, a) {
    this.title = t;   // Initialize title
    this.author = a;  // Initialize author
  }

  // Method to print the details of the book
  printDetails() {
    console.log(`"${this.title}" is written by ${this.author}.`); // Log the book details
  }
}

// Create an object of the class
const book1 = new Book("Atomic Habits", "James Clear"); // Create a book with title "Atomic Habits" and author "James Clear"

// Call the method to print the details of the book
book1.printDetails(); // Log the details of the book