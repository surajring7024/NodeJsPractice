const fs= require("fs");

const https=require("https");

var a=10;
var b=20;

console.log("Hello World!!!");

fs.readFile("./text.txt","utf-8",(err,data)=>{

    https.get("https://dummy.restapiexample.com/api/v1/employees",(res)=>{
        console.log("Data got +");
    });
         
    setTimeout(()=>{
        console.log("SetTimeout for 0 sec");
        
        },0);
    
setImmediate(()=>{
    console.log("2nd set immediate :");
    
})
    console.log("File Data :"+ data);
    
});

setImmediate(()=>{
    console.log("2nd set immediate :");
    console.log("setImmediate" );
})

https.get("https://dummy.restapiexample.com/api/v1/employees",(res)=>{
    console.log("Data got +");
});


setTimeout(()=>{
    console.log("SetTimeout for 0 sec");
    
    },0);

function multiply(a,b){
    console.log("Logging : "+a*b);
}

multiply(a,b);

console.log("LastLine");
