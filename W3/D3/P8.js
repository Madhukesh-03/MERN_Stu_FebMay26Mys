//json stringify and parse
const employee = {
    id: 101,
    name: "John Doe",
    dept:"ME",
    isActive:true,
};
const jsonString = JSON.stringify(employee);
console.log(jsonString);
// console.log(employee);

//Json parsing
const parsedObject = JSON.parse(jsonString);
console.log(parsedObject);