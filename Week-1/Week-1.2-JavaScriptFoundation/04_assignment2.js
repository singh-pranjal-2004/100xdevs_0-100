// 2. Calculate the time it takes between a setTimeout call and the inner functionality actually running.

let delay = 1000;
let startTime = Date.now();

setTimeout(() => {
    let endTime = Date.now();
    let elapsedTime = endTime - startTime;
    console.log(`Expected Delay - ${delay} ms`);
    console.log(`Actual Delay - ${elapsedTime} ms`);
}, delay);