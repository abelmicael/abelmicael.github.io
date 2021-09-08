"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = { Accumulator, Calculator }; //add all of your function names here that you need for the node mocha tests

/**
 * 
 * @returns {Accumulator} constructor function
 */
function Accumulator(currentValue, increment){
   this.currentValue=currentValue;
   this.increment=increment;
  
   this.accumulate= function(){
     this.currentValue+= this.increment;
   }
   this.report= function(){
    return this.currentValue;
   }
 }
/**
 * @returns {Calculator} this is a constructor function
 */
function Calculator(a, b) {
   //implement this
   a =  1,
   b = 1,
       this.sum = function () {
           return this.a + this.b
       },
       this.mul = function () {
           return this.a * this.b;
       },
       this.setValues = function(x,y){
         this.a=x;
         this.b=y;
     }
}
  