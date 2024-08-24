
require("./xyz");
//import { sum1,calculate } from "./sum.js";
//const {sum1,calculate}=require("./calculate/sum.js");
//const{multiplication}=require("./calculate/multiply.js")
const {calculate,multiplication,sum1}=require("./calculate")

const data=require("./data.json");

var name="suraj";

var x=10
var y=20


calculate(x,y);
multiplication(x,y);
// console.log(a+b);
 console.log(name);
console.log(data);
// console.log(global);
console.log(x+y);
console.log(sum1);
