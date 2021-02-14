const a = +prompt("input first number");
const b = +prompt("input second number");

if (a > b) {
    console.log(`${a} bigger then ${b}`)
}else if (b > a) {
    console.log(`${b} bigger then ${a}`)
}else if (a === b) {
    console.log(`${b} same as ${a}`)
};
