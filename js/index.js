window.onload = () => {

  let canvas = document.getElementById('canvas');
  let ctx = canvas.getContext('2d');

  let backgroundRoad = new Image();
  backgroundRoad.src = "./images/road.png";

  let car = new Image();
  car.src = "./images/car.png";
  

  document.getElementById('start-button').onclick = () => {
    startGame();
  };


  // let backgroudImage = {

  //   img: backgroundRoad,
  //   x: 0,
  //   speed: -1,

  //   move: function () {
      
  //     this.x += this.speed;
  //     this.x %= canvas.width;
  //   },

  //   // draw: function() {
  //   //   ctx.drawImage(this.img, this.x, 0);
  //   //   if (this.speed < 0) {
  //   //     ctx.drawImage(this.img, this.x + canvas.width, 0);
  //   //   } else {
  //   //     ctx.drawImage(this.img, this.x - this.img.width, 0);
  //   //   }
  //   },
  // };
  
  // function updateCanvas() {
  //   backgroundImage.move();
  
  //   ctx.clearRect(0, 0, canvas.width, canvas.height);
  //   backgroundImage.draw();
  
  //   requestAnimationFrame(updateCanvas);

  // }
  // img.onload = updateCanvas;

  let gameIsRunning = true;


  function startGame() {

    draw();
  }

  let carObj = {

    x: 180,
    y: 450,
    width: 60,
    height: 120,
    turnLeft: function () {

      if (this.x > -45) {
        
        this.x -= 20;

      }
    },

    turnRight: function () {
      
      if (this.x < 455) {
        
        this.x += 20;

      }
    },
  
    update: function () {
      ctx.drawImage(car, this.x, this.y, this.width, this.height)
    },

  }

  class Obstacle {
    constructor(positionX) {
      this.x = positionX
      this.y = 0
      this.width = 150
      this.height = 30
      this.speedX = 0
      this.speedY = 0

    }
  

    checkCollision() {
      const carX = car.positionX;
      const carY = 500;
      const carWidth = 50;
      const carHeight = 100;
  
      const obstacleX = this.positionX;
      const obstacleY = this.y;
      const obstacleWidth = this.width;
      const obstacleHeight = this.height;
  
      if (
        carX + carWidth > obstacleX &&
        carX < obstacleX + obstacleWidth &&
        carY + carHeight > obstacleY &&
        carY < obstacleY + obstacleHeight
      ) {
        gameIsRunning = false;
      }
    }


    update() {
      ctx.fillStyle = "#870007"
      ctx.fillRect(this.x, this.y, this.width, this.height);
      this.y += 2
    }


  }


  let obstacleArray = [];

  let frameCounter = 0;


  let draw = () => {

    ctx.clearRect(0, 0, 500, 700);

    frameCounter++;
  
    ctx.drawImage(backgroundRoad, 0, 0, canvas.width, canvas.height)  
    carObj.update();
  
    obstacleArray.forEach(function(obstacle) { obstacle.update() })
  
  
    if (frameCounter % 120 === 0) {
      obstacleArray.push(new Obstacle(Math.round(Math.random()*400)))
    }
  
  
    // window.requestAnimationFrame(draw);

    if (gameIsRunning) {
      window.requestAnimationFrame(draw);
    }
  
  }

  document.onkeydown = function (e) {
    switch (e.keyCode) {
      case 37:
        carObj.turnLeft();
        break;
      case 39: 
        carObj.turnRight(); 
        break;
    
    }
  }


};












