export function getTime() {
    const date = new Date();
    const pad = (n: number) => n.toString().padStart(2, "0");

    const day = pad(date.getDate());
    const month = pad(date.getMonth() + 1);
    const year = date.getFullYear();
    const second = date.getSeconds();

    const dateString = `${day}/${month}/${year}/${second}`;

    const timeElement = document.getElementById("time");
    if (timeElement) {
        timeElement.innerHTML = dateString;
    }
}

// Call it once on load if needed
getTime();
