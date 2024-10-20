// 3. Create a terminal clock (HH:MM:SS)

function displayTime(){
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const timeString = `${hours}:${minutes}:${seconds}`;
    console.clear();
    console.log(timeString);
}

setInterval(displayTime, 1000);

displayTime();