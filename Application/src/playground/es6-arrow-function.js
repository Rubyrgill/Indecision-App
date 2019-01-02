//Arrow Function Review - Udemy 

//takes a single number, times it by itself and returns 
//Can be named
const square = function (x) {
    return x * x;
}
console.log(square(8))

//es6-arrow version 
//all arrow functions are anonymous, therefore you have to assign to variable if you want to call it later

// const squareArrow = (x) => {
//     return x * x;
// }


//implicitly returns using expression syntax
const squareArrow = (x) => x * x;




//CHALLENGE 
//getFirstName arrow function - norm
const getFirstName = (fullname) => {
    return fullName;
}

console.log(getFirstName("bob")