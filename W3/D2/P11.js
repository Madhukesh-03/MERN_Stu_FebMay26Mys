//Recursive function
//a function which calls itself is called a recursive function.

function factorial(n) {
    if (n <=1) {
        return 1;
    }
    return n*factorial(n-1);
}