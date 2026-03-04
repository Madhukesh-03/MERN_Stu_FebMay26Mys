//Nested Objects and Methods

const student = {
    firstname: "Madhukesh",
    lastName: "H P",
    scores:{
        math: 80,
        science:83
    },
    hobbies:["reading","singing"],
    fullname: function(){
        return this.firstname + " " + this.lastName;
    },
    greet(){
        console.log("Hii, " ,this.fullname());
    }
};
console.log(student.fullname());