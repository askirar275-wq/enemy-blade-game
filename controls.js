// controls.js

const gameArea = document.getElementById("game");

let touching = false;

gameArea.addEventListener("touchstart", (e) => {
    touching = true;
    movePlayer(e.touches[0]);
});

gameArea.addEventListener("touchmove", (e) => {
    if (!touching) return;
    movePlayer(e.touches[0]);
});

gameArea.addEventListener("touchend", () => {
    touching = false;
});

gameArea.addEventListener("mousedown", (e) => {
    touching = true;
    movePlayer(e);
});

gameArea.addEventListener("mousemove", (e) => {
    if (!touching) return;
    movePlayer(e);
});

window.addEventListener("mouseup", () => {
    touching = false;
});

function movePlayer(point) {

    playerX = point.clientX - 25;

    if (playerX < 0)
        playerX = 0;

    if (playerX > window.innerWidth - 50)
        playerX = window.innerWidth - 50;

    player.style.left = playerX + "px";
}
