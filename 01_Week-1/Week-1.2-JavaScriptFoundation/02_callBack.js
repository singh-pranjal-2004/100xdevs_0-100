function calculateArithmetic(a, b, arithmeticFinalFunction){
    const ans = arithmeticFinalFunction(a, b);
    return ans;
}

function sum(a, b){
    return a+b;
}

function minus(a, b){
    return a-b;
}

const value1 = calculateArithmetic(1, 2, sum);
const value2 = calculateArithmetic(5, 3, minus);
console.log(value1);
console.log(value2);

function greet(){
    console.log("Hey, Pranjal");
}

setTimeout(greet, 3*1000); // Prints after 3 seconds

setInterval(greet, 3*1000); // Prints continuoulsy at an interval of 3 seconds

