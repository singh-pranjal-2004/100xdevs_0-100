// 1. Create a counter in Javascript (Counts down from 30 to 0)

let i = 30;
function countdown(){
    if(i < 0) return;

    console.log(i--);
    setTimeout(countdown, 1000);
}

countdown();