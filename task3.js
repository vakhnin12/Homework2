const name = prompt("What is your name?");
const birthYear = +prompt("Birth year");

let age = 2021 - birthYear;
let alcohol = confirm("Drinking alcohol?");

if (alcohol === false) {
    console.log(`${name}, Well done!`)
}
else if (alcohol === true && age >= 40) {
    console.log(`${name}, Drink responsibly!`)
}
else if (alcohol === true && age >= 18) {
    console.log(`${name}, Don't mix beer and vodka!`)
}
else if (alcohol === true && age < 18) {
    console.log(`${name}, I will told your mother!`)
};