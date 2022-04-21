
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const cWidth = canvas.width;
const cHeight = canvas.height;

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };
  function startGame() {
    gameLogic.start()
    drawRoad();
    drawCar();
  }
};

const gameLogic = {
  frames : 0,
start: function () {
  this.interval = setInterval(this.update, 20);
},
clear: function () {
  ctx.clearRect(0, 0, cWidth, cHeight);
},
stop: function (){
    clearInterval(this.interval)
},
update: function() {
  drawRoad();
  drawCar();
  player.newPos();
}

}



const updateGameArea = () => {
  gameLogic.clear();
  gameLogic.score();
  player.newPos();
  player.update();
  updateObstacles();
  checkGameOver();
};


const drawRoad = () => {
  const roadImg = new Image();
  roadImg.src = "/lab-canvas-race-car/images/road.png";
  ctx.clearRect(0, 0, cWidth, cHeight);
  ctx.drawImage(roadImg, 0, 0, cWidth, cHeight)
};
const carImg = new Image();
carImg.src = "/lab-canvas-race-car/images/car.png";

const drawCar = () => {
  ctx.drawImage(carImg, 215 , 580 , 70, 100)
};

const player = new Component(carImg, 215, 70, 100);



