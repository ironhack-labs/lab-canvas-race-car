const $canvas = document.querySelector("canvas");
const $startButton = document.querySelector ("button")
const ctx = $canvas.getContext("2d");

let frames = 0;
const obstacles =[];

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };
  
  class Board {
    constructor () {
      this.x = 0;
      this.y = 0;
      this.width = $canvas.width
      this.height = $canvas.height
      this.image = new Image();
      this.image.src = "/images/road.png"
    }

    draw() {
      this.y+=4;
      if (this. y > -$canvas.height) this.y=0;
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
      ctx.drawImage(
        this.image,
        this.x,
        this.y - this.height,
        this.height,
        this.width
      )
    }
  }

  class Car {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.width = 40;
      this.height = 60;
      this.image = new Image();
      this.move = 30;
      this.image.src = "images/car.png";
    };

    draw() {
      if (this.x > $canvas.width - this.width - 60) 
        this.x = $canvas.width - this.height - 60;
      
      if (this.x < 65) 
      this.x = 65
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

    moveLeft() {
      this.x -= this.move;
    }
    moveRight() {
      this.x += this.move;
    }

    isTouching(obj) {
      return (
        this.x < obj.x + obj.width &&
        this.x + this.width > obj.x &&
        this.y < obj.y + obj.height &&
        this.y + this.height > obj.y
      );
    }
  }


  class Obstacle extends Car {
    constructor(x, y) {
      super(x, y);
      this.image.src =
        "/images/obstacle.png";
        this.height = 30
        this.width = 180
    }
    draw() {
      this.y+=4;
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    
    }
  }


  class Score {
    constructor() {
      this.x = 100
      this.y= 60
      this.score = 0
    };
    draw() {
      ctx.fillText(this.score, 450, 450);
      ctx.font = "50px sans";
    ctx.fillStyle = "white"
    
    }
    scoreIncrement() {
      this.score ++
    }
  }
  const car1 = new Car(200, 200);
  const board = new Board();
  let score = new Score

  function start() {
    update();
  }

  function update() {
    frames++;
    checkKeys();
    generateObstacles();
    checkCollitions();
    ctx.clearRect(0, 0, $canvas.width, $canvas.height);
    board.draw();
    car1.draw();
    drawObstacles();
    drawScore()
    requestAnimationFrame(update);
  }



  function checkCollitions() {
    obstacles.forEach((obstacle) => {
      if (car1.isTouching(obstacle)) {
        alert("YOU CRASHED!");
      }
    });
  }

  function generateObstacles() {
    if (frames % 140 === 0) {
      const x = Math.floor(Math.random() * 380);
      const obstacle = new Obstacle(x, 0);
      obstacles.push(obstacle);
    }
  }

  function drawObstacles() {
    obstacles.forEach((obstacle) => obstacle.draw());

  }

  function checkKeys() {
    document.onkeydown = (event) => {
      event.preventDefault()
      switch (event.key) {
        case "ArrowLeft":
          car1.moveLeft();
          break;
        case "ArrowRight":
          car1.moveRight();
          break;
          
        default:
          break;
      }
    };
  }

  function drawScore() {
    obstacles.forEach((obstacle)=> {
      if(obstacle.y + obstacle.height > car1.y + car1.height) {
        score.scoreIncrement()
      }
    })
  score.draw()
  }
  $startButton.onclick = start();
} 