//Higher order functions
//A function that takes another function as a parameter or returns a function is called a higher order function.
//or
//A function returns another functionis called a higher order function.

function createMultiplier(factor){
    return function(number){
        return number*factor;
    }
}
let double = createMultiplier(2);
console.log("double(10):",double(10));
let triple = createMultiplier(3);
console.log("triple(30):",triple(30));