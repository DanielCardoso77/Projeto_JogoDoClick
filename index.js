const gameArea = document.getElementById("gameArea");
const target = document.getElementById("target");
const displayScore = document.getElementById("score");
const displayTime = document.getElementById("time");
const displayLife = document.getElementById("life");

let score = 0;
let time = 30;
let life = 3;

target.addEventListener("click", (e) => {
    score++;
    displayScore.innerText = `PONTUAÇÃO: ${score}`;
    moveTarget();


    if (score % 10 === 0) {
        life++;
        displayLife.innerText = `VIDAS: ${life}`;
    }

    if (score % 10 === 0) { 
        time += 10;
    }

    e.stopPropagation();
})

gameArea.addEventListener("click", () => {
    if (life > 0) {
        life--;
        displayLife.innerText = `VIDAS: ${life}`;
    }

    if (life === 0) {
        clearInterval(countDown);
        alert(`Fim de Jogo! | Sua pontuação: ${score}`);
    }
})

const countDown = setInterval(() => {
    time--;

    displayTime.innerText = `TEMPO: ${time}`;
    if (time <= 0) {
        clearInterval(countDown);
        alert(`Fim de Jogo! | Sua pontuação: ${score}`);
    }
    if (score === 10) {
        target.style.backgroundColor = 'blue';
    }

}, 1000)

function moveTarget() {
    const maxWidth = gameArea.clientWidth - target.clientWidth;
    const maxHeight = gameArea.clientHeight - target.clientHeight;

    const x = Math.floor(Math.random() * maxWidth);
    const y = Math.floor(Math.random() * maxHeight);

    target.style.left = `${x}px`;
    target.style.top = `${y}px`;
}