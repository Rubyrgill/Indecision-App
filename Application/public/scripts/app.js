"use strict";

//Arrow Function Review - Udemy 

//takes a single number, times it by itself and returns 
//Can be named
var square = function square(x) {
    return x * x;
};
console.log(square(8));

//es6-arrow version 
//all arrow functions are anonymous, therefore you have to assign to variable if you want to call it later

// const squareArrow = (x) => {
//     return x * x;
// }


//implicitly returns using expression syntax
var squareArrow = function squareArrow(x) {
    return x * x;
};

//CHALLENGE 

var getFirstName = function getFirstName(fullname) {
    console.log(fullname.split(" ")[0]);
};

getFirstName("bob smith");
//getFirstName arrow function - norm
// const getFirstName = (fullname) => {
//     return fullName;
// }

// console.log(getFirstName("bob")
