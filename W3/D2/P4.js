//Conditional statements
let age =20;
if(age<13){
    console.log("Child");
}
else if(age<18){
    console.log("Teenager");
}
else{
    console.log("Adult");
}

//Switch statement
console.log("Switch statements");
const day = "tuesday";
switch (day) {
    case "Monday":
        console.log("Start of the week");
        break;

    case "Wednesday":
        console.log("Midweek");
        break;
    case "Friday":
        console.log("End of the work week");
        break;

    default:
        console.log("Some day of the week");
        break;

}

//Type conversion 
let n = Number("ABC");
console.log(" n:",n," typeof n:", typeof n, "isNan",isNaN(n)); // 123