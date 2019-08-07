window.onload = function() {

  // declare global variables:
  let currentGame;
  let currentCar;


  document.getElementById("game-board").style.display = "none";
  const myCanvas = document.getElementById("the-canvas");
  const ctx = myCanvas.getContext("2d");
  // const myCanvas = document.getElementById("the-canvas").getContext("2d");

  // class Game

  class Game {
    constructor(){
      this.car = {}; // car => object
      this.obstacles = []; // obstacles => array
      this.score = 0;
    }
  }

  class Car {
    constructor(){
      this.x = 220;
      this.y = 520;
      this.width = 50;
      this.height = 80;
      this.img = './images/car.png';
    }
    drawCar(){
      const carImg = new Image();
      carImg.src = this.img;
      // let that = this;
      // carImg.onload = () => {
        //  console.log("----", this);
        ctx.drawImage(carImg, this.x, this.y, this.width, this.height);
      // };
    }

    moveCar(num){
      ctx.clearRect(this.x, this.y, this.width, this.height);
      switch(num){
        case 37:
        if(this.x > 20){
          this.x -= 10;
        }
          break;
        case 39:
        if (this.x < 430 ){
          this.x += 10;
        }
          break;
        default:
          console.logA("What are you doping?");
      }
      // this.drawCar();
    }
  }

  document.onkeydown = function (e) {
    // console.log('what is e: ', e); 
    let whereToGo = e.keyCode;
    currentGame.car.moveCar(whereToGo); 
    // currentCar.moveCar(whereToGo);
  };

  class Obstacle {
    constructor(x, y, width, height){
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
    }

    drawObstacle(){
      ctx.fillStyle = "orange";
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    getLeft(){
      return this.x;
    }
    getRight(){
      return this.x + this.width;
    }

    // getTop(){
    //   return this.y;
    // }

    getBottom(){
      return this.y + this.height;
    }
  }

  function detectCollision(obstacle){
    return !((currentCar.y > obstacle.getBottom()) || 
    (currentCar.x + currentCar.width < obstacle.getLeft()) || 
    (currentCar.x - 5 > obstacle.getRight()));
  }



  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    document.getElementById("game-board").style.display = "block";
    currentGame = new Game();
    
    currentCar = new Car();
    currentGame.car = currentCar;
    // console.log(currentGame);
    currentCar.drawCar();

    update();
  }

  let frames = 0;
  function update(){
    ctx.clearRect(0, 0 , 500, 600);
    currentCar.drawCar();
    frames ++;

    if(frames % 100 === 1){
      randomObstacleX = Math.floor(Math.random() * 450);
      obstacleY = 0; // always starts on the top
      randomObstacleWidth = Math.floor(Math.random() * 50) + 20;
      randomObstacleHeight = Math.floor(Math.random() * 50) + 20;
      let obstacle = new Obstacle(randomObstacleX, obstacleY, randomObstacleWidth, randomObstacleHeight);
      currentGame.obstacles.push(obstacle);
    }

    for (let i=0; i< currentGame.obstacles.length; i++){
      currentGame.obstacles[i].y += 2;
      currentGame.obstacles[i].drawObstacle();
      if(detectCollision(currentGame.obstacles[i])){
        // console.log("BOOOOMMMM!");
        alert("BOOMMMM!");

        frames = 0;
        currentGame.score = 0;
        document.getElementById("score").innerHTML = currentGame.score;

        currentGame.obstacles = [];
        document.getElementById("game-board").style.display = "none";

      }


      if(currentGame.obstacles[i].y >= 600){
        currentGame.obstacles.splice(i, 1);
        currentGame.score ++;
        document.getElementById("score").innerHTML = currentGame.score;
      }
    }

    requestAnimationFrame(update);


  }
};