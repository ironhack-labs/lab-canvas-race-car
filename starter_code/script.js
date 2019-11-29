class GameBoard {
  constructor (width, height){
    this.canvas = document.createElement("canvas");
    this.canvas.width = width;
    this.canvas.height = height;
    this.ctx = this.canvas.getContext("2d");
    document.getElementById("game-board").appendChild(this.canvas);
  }
}

class CarGame extends GameBoard {
  constructor(width, height) {
    super(width, height);
    //Road-Image
    this.roadImg = new Image();
    this.roadImg.src = "./images/Road.PNG";
    this.frames = 0;
    this.updateGamesBoard = this.updateGamesBoard.bind(this);
    this.interval = setInterval(this.updateGamesBoard, 30);

    this.raceCar = new Car(((this.canvas.width/2)-(this.canvas.width/4*0.8)/2), this.canvas.height-200, this.canvas.width/4*0.8, this.canvas.height/3*0.8, this.ctx);
    this.movingObstacles = [];
    //this.movingObstacles.push(new Obstacles(0, 0, "dark-red", 400, 10, ctx)); //todo add dynamics
  }

  updateGamesBoard() {
    this.clearCanvas();
    this.ctx.drawImage(this.roadImg, 0, 0, this.canvas.width, this.canvas.height);
    this.raceCar.update();
    if (this.frames === 0 || this.frames % 250 === 0) {
      this.addObstacle();
    }
    this.frames += 1;
    //console.log(this.movingObstacles.length)
    this.movingObstacles.forEach(obstacle => obstacle.update());
    //this.checkGameOver();
    //this.score();
  }

  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  addObstacle () {
    //car 80/160
    let minWidth = 45;
    let maxWidth = 200;
    let widthMod = Math.floor(
      Math.random() * (maxWidth - minWidth + 1) + minWidth
    );

    let minGap = 120; //car is 60
    let maxGap = 160;
    let gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);

    let deltaX = 400 - (widthMod + gap);
    console.log("xToMid: ", deltaX, " gap: ", gap, " widthMod: ", widthMod);

    this.movingObstacles.push(new Obstacles(0           , 0, "darkred", deltaX, 10, this.ctx));
    this.movingObstacles.push(new Obstacles(400-widthMod, 0, "darkred", 399   , 10, this.ctx));
  }
}

class Car {
  constructor (x, y, width, height, ctx) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.ctx = ctx;
    this.speedX = 0;

    //Car-Image
    this.carImg = new Image();
    this.carImg.src = "./images/car.png";

    document.onkeydown = e => {
      switch (e.keyCode) {
        case 37:
          if (this.speedX === 0){ //allows only for constant direction change without exponential effect
            this.speedX -= 3;
          }
          break;
        case 39:
          if (this.speedX === 0) { //allows only for constant direction change without exponential effect
            this.speedX += 3;
          }
          break;
        default:
      }
    };
    document.onkeyup = e => {
      this.speedX = 0;
    };
  }

  update () {
    let leftBorder = 40;
    let rightBorder = 280; //incl car width 80

    //checks if the car is within the boundaries of the street and repositions the car by few px if its overextending
    if (this.x > leftBorder) {
      this.x += this.speedX;
    }
    else {
      this.x = leftBorder; //reposition car on playground
    }
    if (this.x < rightBorder) {
      this.x += this.speedX;
    }
    else {
      this.x = rightBorder+80; //reposition car on playground
    }
    this.ctx.drawImage(this.carImg, this.x, this.y, this.width, this.height);
  }

  //left() {
  //  return this.x + this.width/2;
  //}
  //right() {
  //  return this.x - this.width/2;
  //}
  
  isCollidedWith(obstacle) {
    //since the player is also a gameObject we have to make sure that it doesn't "collide" with itself
    if (this === obstacle) return false;
    return !(
      this.bottom() < obstacle.top() ||
      this.top() > obstacle.bottom() ||
      this.right() < obstacle.left() ||
      this.left() > obstacle.right()
    );
  }
}

class Obstacles {
  constructor(x, y, color, width, height, ctx) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.width = width;
    this.height = height;
    this.ctx = ctx;
    this.speedY = 1;

  }
  update() {
    this.y += this.speedY;
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}




window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    if (document.getElementById("game-board").getElementsByTagName("canvas").length < 1) {
      startGame();
      document.getElementById("start-button").disabled = true; //inactivate button after first time use
    }
  };

  function startGame() {
    let myCarGame = new CarGame(400, 600);
  }
};


