// Given an array, return a new array which have every element multiplied by 2

const input = [1, 2, 3, 4, 5];

// Method 1 - For Loop
const newArray = [];
for(let i = 0; i < input.length; i++){
    newArray.push(input[i] * 2);
}
console.log(newArray);

// Method 2 - Map
function transform(i){
    return i * 2;
}

const ans = input.map(transform);
console.log(ans);