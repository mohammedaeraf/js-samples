### Assignment: Create a Product Class in JavaScript

---

#### **Objective:**
The goal of this assignment is to strengthen your understanding of JavaScript classes and objects. You will create a `Product` class with specific properties and methods to manage product details.

---

#### **Requirements:**

1. **Create a `Product` class** with the following properties:
   - `name` (string): The name of the product.
   - `price` (number): The price of the product.
   - `quantity` (number): The available quantity of the product.

2. **Define the following methods** in the `Product` class:
   - `calculateTotalValue()`: This method should return the total value of the product, calculated as `price * quantity`.
   - `applyDiscount(discountPercentage)`: This method should reduce the product price by the given discount percentage.
   - `restock(newQuantity)`: This method should increase the product's quantity by the given `newQuantity`.

---

#### **Task Instructions:**

1. Create the `Product` class in JavaScript following the structure above.
2. Create at least **3 product objects** using the `Product` class.
3. Demonstrate the functionality of each method with meaningful examples:
   - Calculate and log the total value of each product.
   - Apply a discount to one of the products and log the updated price.
   - Restock another product and log the updated quantity.

---

#### **Example Output:**

```javascript
const product1 = new Product("Laptop", 900, 5);
const product2 = new Product("Smartphone", 700, 8);
const product3 = new Product("Shoes", 120, 15);

console.log(product1.calculateTotalValue()); // Output: 4500
product2.applyDiscount(10);
console.log(product2.price); // Output: 630
product3.restock(10);
console.log(product3.quantity); // Output: 25
```

---

#### **Bonus Task (Optional):**

- Add a method `isOutOfStock()` to the `Product` class. This method should return `true` if the product's quantity is 0, otherwise return `false`.
- Create a method `displayProductDetails()` that logs all details of the product in a formatted way.

---

#### **Submission Instructions:**
- Write your code in a `.js` file and test it thoroughly.
- Submit the `.js` file or upload it to your GitHub repository and share the link.

---

**Happy Coding! 🎉**