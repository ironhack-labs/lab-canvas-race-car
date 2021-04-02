let frames = 0;
let obstacleArray =[];

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };
  function startGame() {
    setInterval(updateGame, 20);
    
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
    this.speed = 5;
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
  
  
};


class Obstacles {
  constructor(x, width){
    this.width = width;
    this.x = x;
    this.y = 0; 
  }
  drawObstacles(x, width){
    context.fillStyle = "#890000";
    context.fillRect(this.x, this.y, this.width, 50);
    this.moveObstacles()
    this.updateObstacle()
  }
  moveObstacles(){
    this.y += 1;
  } 
  updateObstacle(){
    let obstacleWidth = Math.round(Math.random() * 250) + 100;
    let obdstacleX = Math.floor(Math.random() * (500 - obstacleWidth));
      frames += 1;
      if (frames ===3 || frames % 150 === 0){
        this.drawObstacles(obdstacleX, obstacleWidth)
    }

  }
  
};




const road = new Game(0, 0, 500, 700);
const car = new Car(225, 600, 50, 70);
let obstacleWidth = Math.round(Math.random() * 250) + 100;
let obdstacleX = Math.floor(Math.random() * (500 - obstacleWidth));
let obstacles = new Obstacles(obdstacleX, obstacleWidth);


// function addObstacle(){
//   frames += 1;
//   if (frames ===3 || frames % 150 === 0){
//     obstacleArray.push(obstacles);
//   }
// }





function updateGame() {
  road.clearRoad();
  car.clearCar();
  road.drawRoad();
  car.detectWalls();
  car.drawCar();
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


  // for(let i = 0; i< obstacleArray.length; i++){
  //     obstacleArray[i].x += 1;
  //     obstacleArray[i].update();
  //   }
  //   frames +=1;
  //   if(frames ===3 || frames %120 === 0){
  //     let x = canvas.width;
  
  //     let minWidth = 20;
  //     let maxWidth = 200;
  
  //     let width = Math.floor(Math.random() * (maxWidth - minWidth +1) +minWidth);
  
  //     let minGap = 50;
  //     let maxGap = 200;
  
  //     let gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
  
  //     obstacleArray.push(new Obstacles(10, width, "green", x, 0));
  //     obstacleArray.push(new Obstacles(10, width - gap, "green", x, width + gap))
  //   }