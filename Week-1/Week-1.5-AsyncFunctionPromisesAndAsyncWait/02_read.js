const fs = require("fs");

fs.readFile("a.txt", "utf-8", function(err, data){
    console.log(data);
});

console.log("Hi bro!");

let a = 0;
for(let i = 0; i < 1000000000; i++){
    a++;
}

console.log("Meri Maa ki chut ");