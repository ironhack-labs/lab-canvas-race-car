const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const cWidth = canvas.width;
const cHeight = canvas.height;

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };

  function startGame() {
    drawCanvas();
    player.drawCharacter();
    // gameLogic.clear();
    //player.newPos();
    //player.update();
    /* updateObstacles();
    checkGameOver();
    gameLogic.score(); */
  }
};

function drawCanvas() {
  const background = new Image();
  background.src = "../images/road.png";
  ctx.drawImage(background, 0, 0, cWidth, cHeight);
}

function clearCanvas() {
  ctx.clearRect(0, 0, cWidth, cHeight);
}
//const player = new Car(75, 100, 250, 550, "../images/car.png");

const gameLogic = {
  frames: 0,
  start: function () {
    this.interval = setInterval(updateGameArea, 20);
  },
  clear: function () {
    ctx.clearRect(0, 0, cWidth, cHeight);
  },

  stop: function () {
    clearInterval(this.interval);
  },
  score: function () {
    const points = Math.floor(this.frames / 5);
    ctx.font = "16px serif";
    ctx.fillStyle = "black";
    ctx.fillText(`Score ${points}`, 100, 50);
  },
};
