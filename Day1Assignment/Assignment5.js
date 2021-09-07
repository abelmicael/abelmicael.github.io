const prompt = require ("prompt-sync")();

let cost = prompt("Enter cost of the house: ");
let totalCost = Number(cost);
let downPayment;

if(totalCost > 0 && totalCost < 50000){
    downPayment = 5/100*totalCost;  
}else if(totalCost > 50000 && totalCost < 100000){
    downPayment = 10/100*(totalCost-50000)+1000;  
}else if(totalCost >= 100000 && totalCost < 200000){
    downPayment = 15/100*(totalCost-100000)+2000; 
}else if(totalCost >= 200000){
    downPayment = 15/100*(totalCost-200000)+5000;
}
console.log(downPayment)