// Sample Input
const strings = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape"];

// Task 1: Filter Long Strings
const longStrings = strings.filter(str => str.length > 5);
console.log("Long Strings (length > 5):", longStrings);

// Task 2: Convert to Uppercase
const upperCaseStrings = strings.map(str => str.toUpperCase());
console.log("Strings in Uppercase:", upperCaseStrings);

// Task 3: Find Strings Containing a Specific Character ('a')
const containsA = strings.filter(str => str.toLowerCase().includes("a"));
console.log("Strings containing 'a':", containsA);

// Task 4: Concatenate Strings
const processedStrings = strings.map(str => `${str} - Processed`);
console.log("Processed Strings:", processedStrings);
