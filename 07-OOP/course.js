// Define a class
class Course {
    // properties
    title;         // Property: title of the course
    instructor;    // Property: instructor of the course
    duration;      // Property: duration of the course in hours
    level;         // Property: difficulty level of the course
    students;      // Property: number of students enrolled
  
    // Constructor method to initialize the properties
    constructor(t, i, d, l, s) {
      this.title = t;         // Initialize title
      this.instructor = i;    // Initialize instructor
      this.duration = d;      // Initialize duration
      this.level = l;         // Initialize level
      this.students = s;      // Initialize number of students
    }
  
    // Method to print the details of the course
    printDetails() {
      console.log(`The course "${this.title}" is taught by ${this.instructor}, duration: ${this.duration} hours, level: ${this.level}, students enrolled: ${this.students}.`); // Log the course details
    }
  }
  
  // Create an object of the class
  const course1 = new Course("Introduction to Programming", "Dr. Smith", 40, "Beginner", 200); // Create a course with title "Introduction to Programming", instructor "Dr. Smith", duration 40 hours, level "Beginner", and 200 students
  
  // Call the method to print the details of the course
  course1.printDetails(); // Log the details of the course