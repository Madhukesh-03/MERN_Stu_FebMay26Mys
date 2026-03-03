//IIFE (Immediately invoked function expression)
//
(function(){
    console.log("Basic IIFE executed immediately");
})();

(function(appName,version){
    console.log("App: ",appName,"version: ",version);
    
})("NodeJs", "V22.22.0");

//with return value
const result = (function(a,b){
    const a=10,b=20;
    return a+b;
})();
console.log("Sum is: ",result);