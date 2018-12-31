

// VAR 
var nameVar = 'Bob'
nameVar = 'Mike'
// var nameVar - can reassign or redefine 
console.log('NameVar:, ', nameVar)

// LET
let nameLet = 'Jen'
nameLet = 'Julie'
// let nameLet - can't do duplicate redefined variable but can reassign new value
console.log('nameLet', nameLet)

// CONST
const nameConst = 'Frank';
// nameConst = 'bob' - can't reassign 
// const nameConst = 'bob' - can't redefine
console.log('nameConst', nameConst)

function getPetName() {
    var petName = 'Jim'
    return petName;
}

//BLOCK SCOPING - Block Level 
var fullName = 'Bobby Smith';

//if name exists, then split and grab first index value
if (fullName) {
    var firstName = fullName.split(' ')[0]
    console.log('firstName: ' + firstName)
}

console.log(firstName)


// babel src/playground/es6-let-const.js --out-file=public/scripts/app.js --presets=env,react --watch