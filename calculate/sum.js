 function calculate(x,y){
    console.log("Sum output:"+x+y);
}

var sum1=10;

console.log("sum1 output:"+sum1);

module.exports ={
    sum1,
    calculate
};


// //or u can use
// module.exports.calculate=calculate;
// module.exports.sum1=sum1;