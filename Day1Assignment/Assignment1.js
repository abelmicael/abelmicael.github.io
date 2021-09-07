const prompt = require("prompt-sync")();

let ifSalaried = prompt("Are you salaried? if yes say true, if no say false: ")
let sales = prompt("Enter sales: ");
let commission;

if(ifSalaried==="true"){
    if(sales<=300){
    console.log("No commission, because your sales is below 300,")
}   else if(sales>300 && sales <500){
    commission = 1/100*sales;
}   else if(sales>=500){
    commission=2/100*sales;
}

}else{
   if(sales>300 && sales <500){
    commission = 2/100*sales;
    }else if(sales>=500){
        commission=3/100*sales;
    }
}
console.log(`Your total commission is ${commission}`)