const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const background = new Image();
background.src = '../images/road.png';

  document.getElementById('start-button').onclick = () => {
    startGame();
  };

class Car {
  constructor(img) {
    this.x = 225;
    this.y = 560;
    this.img = img;
    this.score = 0;
   
    this.draw();

  }
  moveLeft() {
    this.x -= 25;
  }
  moveRight() {
    this.x += 25;
  }
  draw() {

    if (this.x >= 450) {
      this.x = 450;
    } else if (this.x <= 0) {
      this.x = 0;
    } else { 
      this.x = this.x;
    }
    ctx.drawImage(this.img, this.x, this.y, 50, 100);

  }

}

class Obstacle {
  constructor(){
    this.y = 0;
    this.posX = Math.floor(Math.random()*251);
    this.size = Math.floor(Math.random()*251);
    this.score = 0;
  }

draw(){

  ctx.fillStyle = 'red';
  ctx.fillRect(this.posX, this.y, this.size, 30);
}
translate(){
  this.y += 2;
}
}

// Load the image
const carBlue = new Image();
carBlue.src = '../images/car.png';
const car = new Car(carBlue);

const obstacles = [];

function startGame() {

  updateCanvas();
  
  setInterval(() => {
    const obstacle = new Obstacle(ctx);
    obstacles.push(obstacle);
  }, 4000); 

}

  function updateCanvas() {
    ctx.clearRect(0, 0, 600,800);
    ctx.fillText('car_x: ' + car.x, 580, 40);
    ctx.fillText('score: ' , 10, 20);
    ctx.drawImage(background, 0, 0, 500, 700);
    car.draw();
    callObstacles();

    requestAnimationFrame(updateCanvas);
  }
function callObstacles(){
  obstacles.forEach((obstacle, index) => {
    if (index < 10){
    obstacle.translate();
    obstacle.draw();
    if (car.x <= obstacle.posX + obstacle.size && car.x + 50 >= obstacle.posX && car.y < obstacle.y + 30 && car.y + 100 > obstacle.y){
      if (car.score > 10) {
        car.score -= 10;
      } else {
        alert(`Game Over!`);
      }
    } else {
      if (obstacle.y > 700);

      //obstacles.splice(index, 1);     
      car.score += 10;
      //console.log(car.score)
    }
  } else {
    alert(`Game over! Your score: ${car.score}`)
  }
  });

 }
  
document.addEventListener('keydown', e => {
  switch (e.code) {
    case "ArrowLeft":
      car.moveLeft();
      break;
    case "ArrowRight":
      car.moveRight();
      break;
  }
});