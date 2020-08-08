/* eslint-disable max-len */
/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */

function roadMove() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(road, 0, posY, canvas.width, canvas.height);
    ctx.drawImage(road, 0, -canvas.height + posY, canvas.width, canvas.height);
    ctx.drawImage(raceCar, carPosX, 580, 50, 100);
    ctx.fillStyle = 'red';
    if (obstacleArray.length > 0) {
        ctx.fillRect(obstacleArray[obsIndex].position, posY, obstacleArray[obsIndex].width, 15);
    }
    posY += 1;
    if (posY === 700) { posY = 0; }
    requestAnimationFrame(roadMove);
}

function gameOver(gameStatus) {
    if (gameStatus === false) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'red';
        ctx.fillText('GAME OVER', 140, 100);
    } else roadMove();
}

const obstacleArray = [];
function obstacles() {
    const newObstacleMeasure = randomPositioning();
    return {
        width: newObstacleMeasure[0],
        position: newObstacleMeasure[1],
        color: 'red',
    };
}

function randomPositioning() {
    const maxWidth = 450;
    const minWidth = 50;
    const size = Math.floor(Math.random() * (maxWidth - minWidth + 1) + minWidth);
    const position = Math.floor(Math.random() * (canvas.width - minWidth + 1) + minWidth);
    return [size, position];
}

setInterval(() => {
    if (startCheck) {
        obstacleArray.push(obstacles());
        console.log(obstacleArray);
    }
}, 2000);

/* setInterval(() => {
    
}, 2500); */