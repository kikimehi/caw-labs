// fileImport.js

// Import the mean function using CommonJS
const { mean } = require('./notation');

// Example arrays of scores
const scores1 = [10, 20, 100, 40, 50];
const scores2 = [15, 25, 35, 45];

// Use the mean function
console.log("Average of scores1:", mean(scores1));
console.log("Average of scores2:", mean(scores2));
