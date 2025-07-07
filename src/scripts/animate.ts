let turn = 0;
let src = "src/assets/emerald1.png";

export function animateFavicon() {
    if (turn % 3 == 1) {
        src = "/src/assets/emerald2.png";
    } else if (turn % 3 == 2) {
        src = "/src/assets/emerald3.png";
    } else {
        src = "/src/assets/emerald1.png";
        turn = 0;
    }

    turn ++;


    const link = document.createElement('link');
    const oldLink = document.getElementById('dynamic-favicon');
    link.id = 'dynamic-favicon';
    link.rel = 'shortcut icon';
    link.href = src;

    if (oldLink) {
        document.head.removeChild(oldLink);
    }

    document.head.appendChild(link);
}
