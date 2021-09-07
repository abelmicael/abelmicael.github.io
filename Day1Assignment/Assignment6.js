const prompt = require("prompt-sync")();

let num = prompt("Enter a number: ");
let number = Number(num);

let x=0;
while(number>0){
x+=number%10;
number=parseInt(number/10);

}
console.log(x);