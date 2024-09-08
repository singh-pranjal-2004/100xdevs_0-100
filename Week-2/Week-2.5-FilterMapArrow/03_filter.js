// Given an array, return an array which have only even numbers in it

const input = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Method 1 - For Loop
const newArray = [];
for(let i = 0; i < input.length; i++){
    if(input[i] % 2 == 0) newArray.push(input[i]);
}

console.log(newArray);

// Method 2 - Filter
const ans = input.filter(function(n){
    if(n % 2 == 0) return true;
    return false;
});
console.log(ans);

const name = ["Pranjal", "Harsh", "Chiku"];
const nameAns = name.filter(function(n){
    if(n.startsWith("C")) return true;
    return false;
});
console.log(nameAns);