
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d')

const cWidth = canvas.width;
const cHeight = canvas.height;


const gameLogic = {
    frames: 0,
    start: function () {
        this.interval = setInterval(updateCanvas, 20)
    },
    clear: function () {
        ctx.clearRect(0, 0, cWidth, cHeight);
    },
    stop: function () {
        clearInterval(this.interval)
    }
}
const car = new Car();
const obstacles = [];

function updateObstacles() {
    gameLogic.frames++

    for (let i = 0; i < obstacles.length; i++) {
        obstacles[i].y += 1;
        obstacles[i].update();
    }
    // so we can keep control how many frames have passed
    // frequency how often new enemies are coming, every 2,4 seconds
    if (gameLogic.frames % 250 === 0) {

        obstacles.push(new Obstacles())
        obstacles.push(new Obstacles());
    }
}



// functions
function drawBackground() {
  const road = new Image();
  road.src = '../images/road.png';
  ctx.drawImage(road, 0, 0, cWidth, cHeight);
}


const updateGameArea = () => {
  gameLogic.clear();
  drawBackground();
  car.draw();
  updateObstacles();
  requestAnimationFrame(updateGameArea)
}

function startGame() {
  drawBackground();
  car.draw();
}


window.onload = () => {

  document.getElementById('start-button').onclick = () => {
    startGame();
  };
};
