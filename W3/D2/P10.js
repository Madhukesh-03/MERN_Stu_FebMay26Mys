// Callback function
// Is a function that is passed as an arguement to another function and is executed after some operation is completed.

function greetUser(name,callback){
    console.log("Hello,",name);
    callback();
}
greetUser("Madhukesh",function(){
    console.log("Callback function executed ");
});