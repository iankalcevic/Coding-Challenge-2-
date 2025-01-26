// Task 1 - Working with arrays
let products = ["Milk", "Bread", "Cheese", "Water Bottles", "Fruit"]; // Array of products
products.push("Juice"); 
console.log(products);
products.pop();
console.log("Updated products list",products);

// Task 2 - Accessing and Modifying Arrays
let scores = [10, 9, 7, 5, 3]
scores[1] = 9;
let total = scores.reduce((a, b ) => a + b, 0);
let average = total / scores.length;
console.log("Updated Scores;", scores);
console.log(total);
console.log("Average Score:", average);
