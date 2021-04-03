let frames = 0;
let obstacleArray =[];

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };
  function startGame() {
    setInterval(updateGame, 20);
    // car.crashCar()
  }
};

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
class Game {
  constructor(x, y, width, height) {
    this.img = new Image();
    this.img.src = "./images/road.png";
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
  }
  drawRoad() {
    context.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
  clearRoad() {
    context.clearRect(this.x, this.y, this.width, this.height);
  }
};
class Car {
  constructor(x, y, width, height) {
    this.img = new Image();
    this.img.src = "./images/car.png";
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speed = 7;
    this.dX = 0;
  }
  drawCar() {
    context.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
  moveLeft() {
    this.x -= this.speed;
  }
  moveRight() {
    this.x += this.speed;
  }
  clearCar() {
    context.clearRect(this.x, this.y, this.width, this.height);
  }
  detectWalls() {
    if (this.x < 0) {
      this.x = 0;
    }
    if (this.x + this.width > 500) {
      this.x = 500 - this.width;
    }
  }
  // crashCar(){
  //     let myleft = this.x;
  //     let myright = this.x + (this.width);
  //     let mytop = this.y;
  //     let mybottom = this.y + (this.height);
  //     obstacleArray.forEach(element => {
  //     let otherleft = element.x;
  //     let otherright = element.x + (element.width);
  //     let othertop = element.y;
  //     let otherbottom = element.y + (element.height);
  //     if ((mybottom < othertop) ||
  //     (mytop > otherbottom) ||
  //     (myright < otherleft) ||
  //     (myleft > otherright)) {
  //       clearInterval(updateGame());
  //     }    
    // });
    // }
};


class Obstacles {
  constructor(x, width){
    this.width = width;
    this.x = x;
    this.y = 0; 
    this.color = "#890000";
  }
  drawObstacles(){
    obstacleArray.forEach(element => {
      context.fillStyle = "#890000";
      context.fillRect(element.x, element.y, element.width, 30);
      if (frames < 1000) {element.y += 1.5;
      }else{ element.y += 2;}
    });
  }
  addObstacle(){
    frames += 1;
    if (frames ===3 || frames % 200 === 0){
      let obstacleWidth = Math.round(Math.random() * 250) + 100;
      let obdstacleX = Math.floor(Math.random() * (500 - obstacleWidth))
      obstacleArray.push(new Obstacles(obdstacleX, obstacleWidth));
    }
  }
};

const road = new Game(0, 0, 500, 700);
const car = new Car(225, 600, 50, 70);
const obstacles = new Obstacles(250, 100);

function updateGame() {
  road.clearRoad();
  car.clearCar();
  road.drawRoad();
  car.detectWalls();
  car.drawCar();
  obstacles.addObstacle()
  obstacles.drawObstacles()
}

document.addEventListener("keydown", (event) => {
  switch (event.code) {
    case "ArrowLeft":
      car.moveLeft();
      break;
    case "ArrowRight":
      car.moveRight();
      break;
  }
});

