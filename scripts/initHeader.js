
window.addEventListener('load', (event) => {
// select your header or whatever element you wish
    const header = document.querySelector("header");

    const headroom = new Headroom(header);
    headroom.init();
});