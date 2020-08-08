/* eslint-disable no-undef */
/* eslint-disable prefer-const */
/* eslint-disable default-case */

// Setup inicial
const road = new Image();
road.src = './images/road.png';

const raceCar = new Image();
raceCar.src = './images/car.png';

let posY = 0;
let carPosX = 225;
let carSpeed = 1;
let gameStatus = true;
let pressed;
let score = 0;
let startCheck = false;
let obsIndex = 0;

// Setup canvas
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Setup greeter + road
road.onload = () => {
    ctx.drawImage(road, 0, posY, canvas.width, canvas.height);
    ctx.font = '30px Arial';
    ctx.fillStyle = 'darkRed';
    ctx.fillText('Press Play to race!', 140, 350, canvas.width);
};

// Setup start button
window.onload = () => {
    document.getElementById('start-button').onclick = () => {
        if (!startCheck) { // Protect canvas from multiple clicks
            gameOver(gameStatus);
            startCheck = true;
        }
    };
};

// Car movement && postition validation/enforcing
document.addEventListener('keydown', (arrow) => {
    if (arrow.keyCode === 37 && gameStatus && carPosX > 0) {
        carPosX -= carSpeed;
        carSpeed *= 1.3;
        if (carPosX < 1) { carPosX = 1; } // Enforce boundaries
    }
    if (arrow.keyCode === 39 && gameStatus && carPosX < 450) {
        carPosX += carSpeed;
        carSpeed *= 1.3;
        if (carPosX > 450) { carPosX = 449; } // Enforce boundaries
    }
});

// Reset car speed on keyup
document.addEventListener('keyup', (arrow) => {
    if (arrow.keyCode === 37 || arrow.keyCode === 39) { carSpeed = 1; }
});
