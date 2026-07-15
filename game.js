// game.js

const GAME = {
    running: true,
    fps: 60,
    level: 1
};

function gameLoop() {

    if (!GAME.running) {
        requestAnimationFrame(gameLoop);
        return;
    }

    // Player Update
    if (typeof playerLoop === "function") {
        // player.js खुद अपना animation चलाता है
    }

    // Zombie Update
    if (typeof updateZombies === "function") {
        updateZombies();
    }

    // Bullet Update
    if (typeof updateBullets === "function") {
        updateBullets();
    }

    // Boss Update
    if (typeof updateBoss === "function") {
        updateBoss();
    }

    requestAnimationFrame(gameLoop);
}

// Pause
function pauseGame() {
    GAME.running = false;
}

// Resume
function resumeGame() {
    GAME.running = true;
}

// Restart
function restartGame() {
    location.reload();
}

// Start Game
window.onload = () => {
    gameLoop();
};
