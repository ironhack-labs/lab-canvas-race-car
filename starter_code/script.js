window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  // width :467  heigth: 717
  // col vd: 38px *2
  // col grey: 391px center x inicial 38px
  // lar col white: 15px inicial 45px
  // posicao horizontal inicial p/ montar a col white.
  // x inicial 38px
  // posicao inicial da pontilhada 229 largura 9px.
  //

  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  let obstacle = new Obstacle();
  let gotHit = false;
  let gameRunning;
  let frames = 0;

  const car = {
    x: 208.74,
    moveLeft() {
      if (this.x > 60) {
        this.x -= 25;
      }
    },
    moveRight() {
      if (this.x < 357.4) {
        this.x += 25;
      }
    },
    checkCollision(obstacle) {
      if (car.y < obstacle.y) {
        console.log("hit");
        return true;
      }
    }
  };

  // car
  function draw(car) {
    const img = new Image();
    imgScale = 158 / 319;
    img.onload = function() {
      ctx.drawImage(img, car.x, 556, 100 * imgScale, 100);
    };
    img.src = "./images/car.png";
  }

  function retangulo(arg1, arg2, arg3, arg4, color) {
    ctx.fillStyle = color;
    ctx.fillRect(arg1, arg2, arg3, arg4);
    ctx.fill();
  }

  // road
  function drawRoad() {
    retangulo(0, 0, 467, 717, "rgb(0,138,0)");
    retangulo(38, 0, 391, 717, "rgb(128,128,128)");
    retangulo(48, 0, 12, 717, "rgb(255,255,255)");
    retangulo(407, 0, 12, 717);
    //stroked line center of the road
    ctx.beginPath();
    ctx.strokeStyle = "rgb(225,225,225)";
    ctx.lineWidth = 9;
    ctx.setLineDash([25, 25]);
    if (frames % 2 === 0) {
      ctx.lineDashOffset = 25;
    } else {
      ctx.lineDashOffset = 0;
    }
    ctx.moveTo(233.5, 0);
    ctx.lineTo(233.5, 725);
    ctx.stroke();
    ctx.closePath();
  }

  // obstaculos
  let numOfObstacles = 10;
  let obstaclesContainer = [];

  function Obstacle() {
    this.height = 41;
    this.width = 0;
    this.x = 0;
    this.y = 0;
    this.points = 0;
    this.overTheEdge = false;

    this.rdnObtWidth = () => {
      this.width = Math.floor(Math.random() * 150)+ 160;
      // console.log('width = ${this.width}');
    };
    this.rdnObtX = () => {
      this.x = Math.floor((Math.random() * 320 - this.width )+ 38 + this.width);
      // console.log('x = ${this.x}');
    };
    this.moveY = () => {
      this.y += 1;
      console.log("movendo");
    };
  }

  function drawObstacle(thisObstacle) {
    ctx.fillStyle = "rgb(140, 0, 0)";
    ctx.fillRect(
      thisObstacle.x,
      thisObstacle.y,
      thisObstacle.width,
      thisObstacle.height
    );

    //Check for collision with car
    if (
      thisObstacle.y === 515 &&
      car.x > thisObstacle.x &&
      car.x < thisObstacle.x + thisObstacle.width
    ) {
      console.log("hit");
      gotHit = true;
    } else if (thisObstacle.y > 917) {
      thisObstacle.y = 0;
      thisObstacle.rdnObtWidth();
      thisObstacle.rdnObtX();
      thisObstacle.points += 1;
    }
    if (thisObstacle.y > Math.floor(Math.random() * 550)+450) {
      thisObstacle.overTheEdge = true;
      console.log(thisObstacle.overTheEdge);
    }
    thisObstacle.moveY();

    //Testing if the bellow helps with the car flickering and delay
    draw(car);
  }

  // updates direction
  function updateCanvas() {

    frames += 1;
    ctx.clearRect(0, 0, 467, 717);
    ctx.fillText(`Car_x: ${car.x}`, 580, 40);
    drawRoad();
    draw(car);
    drawObstacle(obstaclesContainer[0]);
    if (obstaclesContainer[0].overTheEdge) {
      drawObstacle(obstaclesContainer[1]);
    }
    if (obstaclesContainer[1].overTheEdge) {
      drawObstacle(obstaclesContainer[2]);
    }
    //points text
    ctx.font = "38px serif";
    ctx.fillText("Points: " + obstaclesContainer[0].points, 10, 50);
    if (gotHit) {
      gameOver();
    }
  }

  //Game over if Obstacle hits the car
  function gameOver() {


    //Only this working, not above
    clearInterval(gameRunning);
    console.log("Game Over");
    ctx.fillStyle = 'black';
    ctx.clearRect(0, 0, 467, 717);
    ctx.fillRect(0, 0, 467, 717);
    ctx.fillStyle = 'white';
    ctx.font = "38px serif";
    ctx.fillText("Game Over", 120, 358.5);
  }

  for (let i = 0; i < numOfObstacles; i++) {
    obstacle = new Obstacle();
    obstaclesContainer.push(obstacle);
  }

  obstaclesContainer.forEach(function(o) {
    o.rdnObtX();
    o.rdnObtWidth();
    o.moveY();
  }, 100);

  // start game
  function startGame() {
    gameRunning = setInterval(function() {
      updateCanvas();
    });
    document.onkeydown = function(e) {
      switch (e.keyCode) {
        case 37:
          car.moveLeft();
          console.log("left", car);
          break;
        case 39:
          car.moveRight();
          console.log("right", car);
          break;
        default:
          "";
      }
    };
  }
};
