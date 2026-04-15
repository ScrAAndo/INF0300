//Antonio Brozna

// This program prompts the user to enter a positive number less than or equal to 100, and then checks each number from 2 up to that number to determine if it is prime or not. The results are printed to the console.
var readline = require('readline-sync');

var num = readline.question("Enter a positive number less than or equal to 1000: ");

if (num <= 1 || num > 1000) {
    console.log("Invalid input. Please enter a positive number greater than or equal to1 and less than or equal to 1000.");
    }
else {

    primesList = [];
    // Finds Primes up to the number entered by the user
    
    for (var i = 2; i <= num; i++) {
        checkNumber = i;
        if (isPrime(checkNumber)) {
            primesList.push(i);
        }
    }
    console.log("Prime numbers up to " + num + ": " + primesList.join(", "));

    // Finds largest gap between 2 prime numbers in primesList and lists them 
    var largestGap = 0;
    var prime1 = 0;
    var prime2 = 0;

    for (var j = 1; j < primesList.length; j++) {
        var gap = primesList[j] - primesList[j - 1];
        if (gap > largestGap) {
            largestGap = gap;
            prime1 = primesList[j - 1];
            prime2 = primesList[j];
        }
    }
    console.log("Largest gap between two prime numbers up to " + num + ": " + largestGap + " (between " + prime1 + " and " + prime2 + ")");

    // Finds the average gap between prime numbers in primesList
    var totalGap = 0;
    for (var k = 1; k < primesList.length; k++) {
        totalGap += primesList[k] - primesList[k - 1];
    }
    var averageGap = totalGap / (primesList.length - 1);
    console.log("Average gap between prime numbers up to " + num + ": " + averageGap.toFixed(2));
}


function isPrime(num) {
  // Prime numbers must be greater than 1
  if (num <= 1) return false;
  
  // 2 is the only even prime number
  if (num === 2) return true;
  
  // Skip all other even numbers immediately
  if (num % 2 === 0) return false;

  // Check divisors from 3 up to the square root, skipping even numbers
  const limit = Math.sqrt(num);
  for (let i = 3; i <= limit; i += 2) {
    if (num % i === 0) return false;
  }

  return true;
}