// ui.js

let highScore = Number(localStorage.getItem("highScore")) || 0;

const scoreText = document.getElementById("score");
const healthText = document.getElementById("health");

// हाई स्कोर दिखाओ
const high = document.createElement("div");
high.id = "highScore";
high.innerHTML = "🏆 High : " + highScore;
high.style.position = "absolute";
high.style.top = "45px";
high.style.left = "10px";
high.style.color = "white";
high.style.fontWeight = "bold";
high.style.fontSize = "20px";
high.style.zIndex = "1000";

document.body.appendChild(high);

// Pause Button
const pauseBtn = document.createElement("button");
pauseBtn.innerHTML = "⏸️";
pauseBtn.id = "pauseBtn";
pauseBtn.style.position = "absolute";
pauseBtn.style.top = "10px";
pauseBtn.style.right = "10px";
pauseBtn.style.width = "60px";
pauseBtn.style.height = "60px";
pauseBtn.style.fontSize = "26px";
pauseBtn.style.borderRadius = "50%";
pauseBtn.style.zIndex = "1000";

document.body.appendChild(pauseBtn);

let paused = false;

pauseBtn.onclick = () => {
    paused = !paused;
    pauseBtn.innerHTML = paused ? "▶️" : "⏸️";
};

// Score Update
function addScore(value = 1) {

    score += value;

    scoreText.innerHTML = "⭐ Score : " + score;

    scoreText.animate(
        [
            { transform: "scale(1)" },
            { transform: "scale(1.3)" },
            { transform: "scale(1)" }
        ],
        {
            duration: 200
        }
    );

    if (score > highScore) {

        highScore = score;

        localStorage.setItem("highScore", highScore);

        high.innerHTML = "🏆 High : " + highScore;
    }

}

// Health Update
function updateHealth(value) {

    health = value;

    if (health < 0) health = 0;

    healthText.innerHTML = "❤️ Health : " + health;

}

// Restart
function restartGame() {

    location.reload();

        }
