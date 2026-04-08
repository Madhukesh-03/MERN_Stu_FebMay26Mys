//Movies.js
// This file stores the movie data used in the CLI App

const movies = [
    {
        id:1,
        title:"Dhurandar2",
        language:"Hindi",
        genre:"Action Thriller",
        city:"Mysuru",
        cimena:"Nexus Mall-Screen 1",
        showTimes:[
            {time: "10:00 AM",seatsAvailable:250},
            {time: "1:00 PM",seatsAvailable:250},
            {time: "6:00 AM",seatsAvailable:250}
        ]
    },
    {
        id:2,
        title:"LoveMocktile3",
        language:"Kannada",
        genre:"Romantic Patho",
        city:"Mysuru",
        cimena:"DRC Mall-Screen 2",
        showTimes:[
            {time: "10:00 AM",seatsAvailable:100},
            {time: "1:00 PM",seatsAvailable:70},
            {time: "6:00 AM",seatsAvailable:200}
        ]
    },
    {
        id:3,
        title:"Havyagreeva",
        language:"Kannada",
        genre:"Action ",
        city:"Davanagere",
        cimena:"Davanagere Mall-Screen 1",
        showTimes:[
            {time: "11:00 AM",seatsAvailable:100},
            {time: "4:00 PM",seatsAvailable:70},
            {time: "8:00 AM",seatsAvailable:200}
        ]
    }
];
//Export the movie data so that other file can use it
module.exports = movies;