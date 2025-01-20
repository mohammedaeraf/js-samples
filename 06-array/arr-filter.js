// Initialize an array with marks
let marks = [45, 60, 85, 90, 22, 83, 98];

// Filter the marks using a custom filter function
let marks2 = myFilter(marks);

// Output the filtered marks to the console
console.log(marks2); // outputs - [85, 90, 83, 98]

// Custom filter function to filter marks greater than or equal to 80
function myFilter(marks) {
    // Initialize an empty array to store the filtered marks
    let newMarks = [];
    
    // Loop through each mark in the input array
    for (const mark of marks) {
        // If the mark is greater than or equal to 80, add it to the new array
        if (mark >= 80) {
            newMarks.push(mark);
        }
    }
    
    // Return the new array with filtered marks
    return newMarks;
}