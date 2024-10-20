const fs = require('fs');

let a = 1;
console.log(a);

fs.readFile("03_file.txt", "utf-8", (err, data) => {
    if (err) {
        console.error("Error reading the file:", err);
        return;
    }
    console.log("Data from the file is: ");
    console.log(data);
});

let ans = 0;
for(let i = 0; i < 100; i++){
    ans += i;
}
console.log(ans);