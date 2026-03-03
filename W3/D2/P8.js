//Default parameters 
function product (a,b){
    return a*b;
}
console.log("Product of 15 and 4 is ",product(15,4));
console.log("Product of 15 ",product(15)); 

//Rest parameters
function sumOfAll(...numbers){
    console.log(...numbers);

}
sumOfAll(1,2,3);
sumOfAll(10);


