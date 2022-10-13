/** @type {HTMLCanvasElement} */


const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

/*ctx.fillStyle = 'green';
ctx.fillRect(0, 0, 500, 700);

ctx.fillStyle = 'grey';
ctx.fillRect(50, 0, 400, 700);

function whiteLine() {

ctx.strokeStyle = 'white';
ctx.lineWidth = 10;

ctx.beginPath();
ctx.moveTo(65, 0);
ctx.lineTo(65, 700);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(435, 0);
ctx.lineTo(435, 700);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.setLineDash([40]);
ctx.moveTo(250, 0);
ctx.lineTo(250, 700);
ctx.stroke();

}

whiteLine();*/

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame(){}
};

function drawBackground() {
  const backgroundImage = new Image();
  backgroundImage.src = "/images/road.png";
  ctx.drawImage(backgroundImage, 0, 0, 500, 700);
  }

  game.startGame();

  class Player {
    constructor(){
      this.x = 225;
      this.y = 600;
    }
  }

const rua = new Image();
rua.onload = function () {
ctx.drawImage(rua, 0, 0, 500, 700)
}

rua.src="../images/road.png";

let player = new Player();
let game = new Gamepad(ctx, 500, 700, player);

class Game {
  constructor(ctx, width, height, player) {
      this.ctx = ctx;
      this.width = width;
      this.height = height;
      this.player = player;
      this.intervalId = null;
      this.obstacles = [];
  }
};

start() {
  this.intervalId = setInterval(this.update, 1000 / 60);
}

clear() {
  this.ctx.clearRect(0, 0, this.width, this.height)
}

update = () => {
    this.frames++;
    drawBackground();
    this.player.draw();
  }

