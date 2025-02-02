### **Assignment: Working with Strings in Arrays**

---

**Instructions:**

You are given an array of strings, where each string represents a word or a phrase. Use the provided string functions and array methods (`filter()` and `map()`) to complete the tasks below. Write the solutions in JavaScript.

---

#### **Problem Statement**

1. **Filter Long Strings**  
   Use the `filter()` method to create a new array called `longStrings` that contains only strings with a length greater than 5 characters.

2. **Convert to Uppercase**  
   Use the `map()` method to create a new array called `upperCaseStrings`, where each string in the array is converted to uppercase.

3. **Find Strings Containing a Specific Character**  
   Use the `filter()` method to create an array called `containsA` that contains only the strings that have the letter "a" (case insensitive).

4. **Concatenate Strings**  
   Use the `map()` method to append the text " - Processed" to each string in the original array and store it in a new array called `processedStrings`.

---

**Sample Input:**
```javascript
const strings = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape"];
```

---

**Expected Outputs:**

1. **longStrings**:  
   Example: `["banana", "cherry", "elderberry"]`

2. **upperCaseStrings**:  
   Example: `["APPLE", "BANANA", "CHERRY", "DATE", "ELDERBERRY", "FIG", "GRAPE"]`

3. **containsA**:  
   Example: `["apple", "banana", "grape"]`

4. **processedStrings**:  
   Example: `["apple - Processed", "banana - Processed", "cherry - Processed", ...]`

---

**Submission Guidelines:**

- Ensure all the tasks are implemented in JavaScript.  
- Test your code for the given input and verify the outputs.  
- Share your code snippets and results.  

--- 

This assignment will help you practice using string functions along with array methods like `filter()` and `map()` to manipulate strings effectively.