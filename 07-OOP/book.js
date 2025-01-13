// Define a class
class Book {
  // properties
  title;      // Property: title of the book
  author;     // Property: author of the book
  genre;      // Property: genre of the book
  year;       // Property: publication year of the book
  pages;      // Property: number of pages in the book

  // Constructor method to initialize the properties
  constructor(t, a, g, y, p) {
    this.title = t;   // Initialize title
    this.author = a;  // Initialize author
    this.genre = g;   // Initialize genre
    this.year = y;    // Initialize publication year
    this.pages = p;   // Initialize number of pages
  }

  // Method to print the details of the book
  printDetails() {
    console.log(`"${this.title}" is written by ${this.author}, genre: ${this.genre}, published in ${this.year}, ${this.pages} pages.`); // Log the book details
  }
}

// Create an object of the class
const book1 = new Book("Atomic Habits", "James Clear", "Self-help", 2018, 320); // Create a book with title "Atomic Habits", author "James Clear", genre "Self-help", year 2018, and 320 pages

// Call the method to print the details of the book
book1.printDetails(); // Log the details of the book