
window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    drawImg();
    new Obstacles;
    new Player;
  }
};
class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.player;
    this.obstacles = [];
    this.GameOver = false;
  }
  startLoop() {
    this.player = new Player(this.canvas, 3);

      let loop = () => {
        if (Math.random() > 0.98) {
          const y = Math.random() * this.canvas.height;
          this.enemies.push(new Enemy(this.canvas, y));
        }
      }
  }
}
function drawImg() {
  var canvas = document.querySelector("#canvas");
  context = canvas.getContext('2d');

  makeBase();

  function makeBase() {
    baseImage = new Image();
    baseImage.src = '../images/road.png'
    baseImage.onload = function() {
      context.drawImage(baseImage, 0, 0, 500, 700);
    }
  }
  
}
drawImg();
function drawCar() {
  var canvas = document.querySelector("#canvas");
  context = canvas.getContext("2d");
    makeCar();
    
    function makeCar() {
  carImage = new Image ();
  carImage.src = '../images/car.png'
  carImage.onload = function() {
    context.drawImage(carImage, 250, 700, 200, 100)
  }
  
}
}
drawCar();
