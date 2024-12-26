// Simulated correct username and password
const correctUsername = "admin";
const correctPassword = "password123";

let username, password; // Variables for user input
let isAuthenticated = false; // Flag for login status

do {
  // Prompting user for credentials
  username = prompt("Enter your username:");
  password = prompt("Enter your password:");

  if (username === correctUsername && password === correctPassword) {
    console.log("Login successful! Welcome!");
    isAuthenticated = true; // Set authentication status to true
  } else {
    console.log("Invalid credentials. Please try again.");
  }
} while (!isAuthenticated); // Repeat while authentication is not successful
