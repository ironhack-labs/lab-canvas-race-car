window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {}
};

const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
const roadImg = new Image()
roadImg.src = "/images/road.png"
const carImg = new Image()
carImg.src = "/images/car.png"
const backgroundImage = {
  img: roadImg,
  y: 0,
  speed: 5,
  move: function(){
      this.y += this.speed
      this.y %= canvas.height;
  },
  draw: function(){
      ctx.drawImage(this.img, 0, this.y, 500, 700);
      if (this.speed > 0) {
          ctx.drawImage(this.img, 0, this.y - canvas.height, 500, 700);
        }
  }
}
// CANVAS AREA
const myGameArea = {
  frames: 0,
  score: function () {
      const points = Math.floor(this.frames / 5);
      ctx.font = '18px serif';
      ctx.fillStyle = 'black';
      ctx.fillText(`Score: ${points}`, 350, 50);
      return points
  },
};
// JUGADOR Y OBSTÁCULOS
class Component {
  constructor(x, y, width, height) {
      this.width = width;
      this.height = height;
      this.color = 'red';
      this.x = x;
      this.y = y;
      this.speedX = 0;
      this.speedY = 0;
    }
    left() {
      return this.x;
    }
    right() {
      return this.x + this.width;
    }
    top() {
      return this.y;
    }
    bottom() {
      return this.y + this.height;
    }
    crashWith(obstacle) {
      return !(
          this.bottom() < obstacle.top() ||
          this.top() > obstacle.bottom() ||
          this.right() < obstacle.left() ||
          this.left() > obstacle.right());
    }
    updateCar() {  // GENERA EL CARRO
      ctx.drawImage(carImg, this.x, this.y, this.width, this.height)
    }
    updateObstacle() {  // GENERA EL OBSTACULO
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    newPos() { // new Position del carro o del obstáculo
      this.x += this.speedX;
      this.y += this.speedY;
    }
}
const car = new Component(canvas.width/2 - 25, canvas.height - 90 - 10, 50, 90)
const myObstacles = []
// ACTUALIZACIÓN DE OBSTÁCULOS
function updateObstacles() {
  for (let i = 0; i < myObstacles.length; i++) {
      myObstacles[i].y += 1
      myObstacles[i].updateObstacle();
  }
  myGameArea.frames += 1;
  if (myGameArea.frames % 120 === 0) {
    let x = canvas.width;
    let y = canvas.height;
    let widthObstacle = 100;
    let heightObstacle = 10;
    let xRandom = Math.floor(Math.random() * 310 + 60);
    // PRIMER OBSTACULO
    myObstacles.push(new Component(xRandom, 0, widthObstacle, heightObstacle));
  }
}
// GAME OVER
function checkGameOver(id) {
  const crashed = myObstacles.some(function (obstacle) {
    return car.crashWith(obstacle); // DEVUELVE UN VERDADERO O FALSO
  });
  if (crashed) {
      cancelAnimationFrame(id)
      let finalScore = myGameArea.score();
      ctx.fillStyle = 'black';
      ctx.fillRect(100, 200, 300, 200);
      ctx.font = '30px serif';
      ctx.fillStyle = 'red';
      ctx.fillText(`Game Over!`, 170, 260);
      ctx.font = '30px serif';
      ctx.fillStyle = 'white';
      ctx.fillText(`Your final score`, 160, 300);
      ctx.font = '30px serif';
      ctx.fillStyle = 'white';
      ctx.fillText(`${finalScore}`, 210, 340);
  }
}
function clear(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}
function drawRoad(){
  ctx.drawImage(roadImg, 0, 0, canvas.width, canvas.height)
}
// MOTOR
function updateGameArea() {
  clear()
  backgroundImage.move()
  backgroundImage.draw()
  //drawRoad()
  car.newPos();
  car.updateCar();
  detectWalls();
  updateObstacles();
  myGameArea.score()
  let frameId = requestAnimationFrame(updateGameArea)
  checkGameOver(frameId);
}
function detectWalls(){
  let grass = 60
  if(car.x < grass){
      car.x = grass
  }
  if(car.x + car.width > canvas.width - grass){
      car.x = canvas.width - car.width - grass
  }
}
window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    // INVOCACIÓN DEL JUEGO
    updateGameArea();
  }
}
// EVENTOS
document.addEventListener('keydown', (e) => {
  switch (e.keyCode) {
    case 37: // left arrow
      car.speedX -= 1;
      break;
    case 39: // right arrow
      car.speedX += 1;
      break;
  }
});
document.addEventListener('keyup', (e) => {
  car.speedX = 0;
  car.speedY = 0;
});


