function sum(index){
    let ans = 0;
    for(let i = 1; i <= index; i++){
        ans = ans + i;
    }

    return ans;
}


let i = 1000;
let sum1 = sum(i);

let j = 2000;
let sum2 = sum(j);

console.log(sum1);
console.log(sum2);
