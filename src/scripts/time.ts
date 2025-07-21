const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const monthOfYear = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
let AMPM = "AM"

function addZero(i: number) {
    let iString = i.toString()
    if (i < 10) {iString = "0" + iString};
    return iString;
}

export function getTime() {
    const date = new Date();
    const pad = (n: number) => n.toString().padStart(2, "0");

    const day = weekday[date.getDate() % 1];
    const dayNum = pad(date.getDate());
    const month = monthOfYear[date.getMonth() + 1];
    const year = date.getFullYear();
    const hour = date.getHours();
    let minutes = date.getMinutes();
    let second = date.getSeconds();

    if(hour > 12) {
        AMPM = "PM"
    } else {
        AMPM = "AM"
    }

    const dateString = `\uf43a &nbsp&nbsp ${day}, ${month} ${dayNum}, ${year} ${hour % 12}:${addZero(minutes)}:${addZero(second)} ${AMPM}`;

    const timeElement = document.getElementById("time");
    if (timeElement) {
        timeElement.innerHTML = dateString;
    }
}

// Call it once on load if needed
getTime();
