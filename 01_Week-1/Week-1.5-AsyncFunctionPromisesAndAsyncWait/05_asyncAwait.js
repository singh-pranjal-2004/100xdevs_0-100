// Without using async await

// function kiratsAsyncFunction(){
//     let p = new Promise(function(resolve){
//         resolve("Hi Brother!");
//     });
//     return p;
// }

// function main(){
//     kiratsAsyncFunction().then(function(value){
//         console.log(value);
//     });
// }

// main();

// Using async await 

function kiratsAsyncFunction(){
    let p = new Promise(function(resolve){
        setTimeout(function(){
            resolve("Hi Brother!");
        }, 1000);
    });
    return p;
}

async function main(){
    let value = await kiratsAsyncFunction();
    console.log(value);
}

main();