 // Define a class
 class Book {
    // properties
    title;
    author;

    constructor(t, a) {
      this.title = t;   // Property: title of the book
      this.author = a; // Property: author of the book
    }
  
    printDetails() {
      console.log(`"${this.title}" is written by ${this.author}.`);
    }
  }
  
  // // Create an object of the class
  const book1 = new Book("Atomic Habits", "James Clear");
  
  // // Call the method
  book1.printDetails();
  