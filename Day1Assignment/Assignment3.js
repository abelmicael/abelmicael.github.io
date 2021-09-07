const prompt = require("prompt-sync")();

let intialAmount = prompt("Enter the intial amout: ");
let annualInterest= prompt ("Enter the annual interest rate: ");
let numOfYears= prompt("Enter number of years: ");

let total = intialAmount*annualInterest/100*numOfYears;
let monthly=(intialAmount/12)*(annualInterest/100);
console.log(`The total interest for${numOfYears} number of years is: `+total);
console.log("The total monthly interest is: "+monthly);