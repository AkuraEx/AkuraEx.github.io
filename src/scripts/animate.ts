const { BASE_URL } = import.meta.env;
let turn = 0;
let src = `${BASE_URL}emerald1.png`;

export function animateFavicon() {
    if (turn % 3 == 1) {
        src = `${BASE_URL}emerald2.png`;
    } else if (turn % 3 == 2) {
        src = `${BASE_URL}emerald3.png`;
    } else {
        src = `${BASE_URL}emerald1.png`;
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
