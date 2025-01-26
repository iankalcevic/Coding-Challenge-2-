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

// Task 3 - Working with Objects
let employee = {
    name: "John Smith", 
    age: 20,
    department: "Technology"
    isActive: true
};
console.log(employee);
employee.department = "Talent Aquisition";
employee.position = "Associate";
console.log(employee)

//Task 4 - Array of Objects
let customers = [
    {name: "Demar Derozan",
        email: "Droz@gmail.com",
        purchaseAmount: 10},
    {name: "Zach Lavine",
        email: "ZLavine@gmail.com",
        purchaseAmount: 50},
    {name: "Coby White",
        email: "Cwhite@gmail.com",
        purchaseAmount: 100}
];
console.log(customers);
customers.push({name: "Mark Williams", email: "MW@gmail.com" purchaseAmount: 200});
console.log(customers);
