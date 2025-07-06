export function animateFavicon() {
    const now = new Date();
    const seconds = now.getSeconds(); // ✅ Correct way
    let src = "src/assets/Arisu.png";

    if (seconds % 2 == 0) {
        src = "src/assets/Arisu2.png";
    } else if (seconds % 3 == 0) {
        src = "src/assets/Arisu3.png";
    }

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
