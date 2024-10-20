console.log("HI!");

setTimeout(function timeout(){
    console.log("Tick Tick Tick...");
}, 5000);

let ans = 0;
for(let i = 0; i < 100; i++){
    ans += i;
}
console.log(ans);