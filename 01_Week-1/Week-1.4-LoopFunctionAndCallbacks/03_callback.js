function square(n){
    return n*n;
}

function cube(n){
    return n*n*n;
}

function sumOfThings(a, b, callback){
    const val1 = callback(a);
    const val2 = callback(b);
    console.log(callback);
    return val1 + val2;
}

let sum = sumOfThings(2, 3, cube);
let sum2 = sumOfThings(2, 3, function (n){
    return n*n*n;
})
console.log(sum);
console.log(sum2);