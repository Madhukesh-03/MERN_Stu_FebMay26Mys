//Reduce method
let nums = [5,10,15];

let Average = nums.reduce((intermediateSum ,current) => intermediateSum + current ,0)/nums.length;
console.log(Average);

//Reduce to object count by category
let items =["Pen","Pencil","pen","eraser"];
let count = items.reduce((a,b)=>{
    a[items] = (a[items] || 0) + 1;
    return a;
},{});
console.log("item count: ",count);