//Filter method
let marks = [75, 49,56,70,82,51,68];
let passed = marks.filter(marks => marks >=70);

console.log(marks);
console.log(passed);

//Filter objects
let students = [
    {name:"Arjun", marks:75},
    {name:"Krishna", marks:49},
    {name:"Gola", marks:56},
    {name:"Ravi", marks:70},
    {name:"Sita", marks:82},
    {name:"Geeta", marks:51},
    {name:"Rohit", marks:68}
];
let passedStudents = students.filter(student => student.marks >= 70).map(student =>student.name);
// console.log(students);
console.log(passedStudents);
