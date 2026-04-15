//Antonio Brozna

//1. Prompts the user for a number n (> 0).
//2. Generates the first n numbers of the Fibonacci sequence.
//3. Filters and prints only the odd Fibonacci numbers from that
//sequence.

var readline = require('readline-sync');

var num = readline.question("Enter a positive number: ");


fibonacciList = [];
//Full Fibonacci sequence up to n

for (let i = 1; i <= num; i++) {
    fibonacciList.push(fibonacci(i));
}
console.log("Fibonacci sequence up to " + num + ": " + fibonacciList);

// Filter and print only the odd Fibonacci numbers
var oddFibonacci = fibonacciList.filter(num => num % 2 !== 0);
console.log("Odd Fibonacci numbers: " + oddFibonacci);

function fibonacci(num) {
    let num1 = 0;
    let num2 = 1;
    let sum;
    if (num === 1) {
        return num1;
    } else if (num === 2) {
        return num2;
    } else {
        for (let i = 3; i <= num; i++) {
            sum = num1 + num2;
            num1 = num2;
            num2 = sum;
        }
        return num2;
    }
}
