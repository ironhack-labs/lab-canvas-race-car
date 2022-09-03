const myGame = {
  canvas: document.querySelector("canvas"),
  frames: 0,
  obstacles: [],
  stop: false,
  player: null,
  start: function () {
    this.player = new Component(120, 500, 70, 150);

    this.canvas.width = 500;
    this.canvas.height = 700;
    this.context = this.canvas.getContext("2d");
    
    startGame();
  
  },
  clear: function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
};

const carImg = new Image();
carImg.src = "/images/f1-cars.png";

function startGame() {
  console.log("Starting the game");
  myGame.clear();
  myGame.player.newPos();
  myGame.player.drawCar();
  
  obstacle.updateObstacle();

  myGame.frames += 1;
 
  if (!myGame.stop) {
    requestAnimationFrame(startGame);
    
  }
  
}
