const number = +prompt("Input number");
const lastNumber = number % 10;
if (lastNumber % 2 === 0){
    console.log(`The number is even and it ends at ${lastNumber}`)
}else if(lastNumber % 2 === 1) {
    console.log(`The number is not even and it ends at ${lastNumber}`)
}