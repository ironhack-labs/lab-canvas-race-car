// const setCanvasDimensions = () => {
//   w = 350;
//   h = 500;
//   w2 = w / 2;
//   h2 = h / 2;

//   // draw();
// };

// setCanvasDimensions();
Math.randomFloat = (min, max) => Math.random() * (max - min) + min;
// eslint-disable-next-line no-unused-vars
Math.randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
// eslint-disable-next-line no-unused-vars
Math.shuffle = (array, _) => array.sort(() => Math.random() - 0.5);

class Obstacle {
  constructor(posX, posY, width, height) {
    this.width = width;
    this.height = height;
    this.posX = posX;
    this.posY = posY;
  }
}

class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.intervalID;
    this.counter = 0;
    this.aleatorioX = Math.floor(Math.random() * 175) + 1;
    this.aleatorioW = Math.floor(Math.random() * 100) + 50;
    this.car = {
      image: new Image()
    };
    this.obstacles = [];
    this.carX=140;
    this.carY=350;

  }

  startGame() {
    this.canvas.setAttribute("width", "350");
    this.canvas.setAttribute("height", "500");
    // this.clearInterval = intervalID
    this.intervalID = setInterval(() => {
      this.clearCanvas();
      this.drawCentralLine();
      this.drawBackground();
      this.drawCar();
      this.moveCar();
      this.createObstacles();
      this.drawObstacles();

            this.obstacleCol();
      this.counter -= 2;
    //   console.log(this.obstacles);
      //       if (this.endgame === true) {
      //         clearInterval(intervalID);
      //       }
    }, 1000 / 60);
  }

  drawBackground() {
    this.ctx.fillStyle = "green";
    this.ctx.fillRect(0, 0, 25, 500);
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(35, 0, 10, 500);
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(305, 0, 10, 500);
    this.ctx.fillStyle = "green";
    this.ctx.fillRect(325, 0, 25, 500);
  }

  drawCentralLine() {
    this.ctx.beginPath();
    this.ctx.fillStyle = "white";
    this.ctx.setLineDash([15, 15]);
    this.ctx.moveTo(175, 0);
    this.ctx.lineTo(175, 2500);
    this.ctx.strokeStyle = `white`;
    this.ctx.lineWidth = 5;
    this.ctx.lineDashOffset = this.counter;
    this.ctx.stroke();
    this.ctx.closePath();
  }

  drawCar() {
    this.car.image.src = "./images/car.png";
    this.ctx.drawImage(this.car.image, this.carX, this.carY, 66, 134);
    // console.log("derecha");
    // console.log("dentro");
  }

  moveCar() {
    window.onkeydown = e => {
      if (e.keyCode === 39) {
        // console.log("derecha");
        if (this.carX > 260) {
          this.carX = 260;
        } else {
          this.carX += 5;
        }
      }

      if (e.keyCode === 37) {
        // console.log("izquierda");
        if (this.carX < 35) {
          this.carX = 35;
        } else {
          this.carX -= 5;
        }
      }
    };
  }
  //   {
  //     x: Math.random() * (0 - 150),
  //     y: this.counter,
  //     width: Math.random() * (0 - 150),
  //     height: 20
  //   }

  createObstacles() {
    if (this.counter % 300 === 0) {
      let randomX = Math.floor(Math.random() * 175) + 1;
      let randomW = Math.floor(Math.random() * 100) + 50;
      this.obstacles.push(new Obstacle(randomX, 0, randomW, 30));
    }
  }

  drawObstacles() {
    this.obstacles.forEach(obstacle => {
      obstacle.posY += 3;
      this.ctx.fillStyle = "brown";
      //   console.log(obstacle);
      this.ctx.fillRect(
        obstacle.posX,
        obstacle.posY,
        obstacle.width,
        obstacle.height
      );
    });
    // this.ctx.fillStyle = "brown";
    // this.ctx.fillRect(this.aleatorioX, -this.counter, this.aleatorioW, 30);
  }

  obstacleCol(){
    this.obstacles.forEach((obstacle) => {
        console.log(this.carX)
        console.log(obstacle.posX)
        console.log(obstacle.width)
        console.log(this.carY)
        if (this.carX < obstacle.posX + obstacle.width &&
            this.carX + 66 > obstacle.posX &&
            this.carY < obstacle.posY + 30 &&
            this.carY + 134 > obstacle.posY) {
             console.log("muerte")
         }
    })
 

  }

  clearCanvas() {
    this.ctx.clearRect(0, 0, 350, 500);
  }

  // }
}

// EN ALGUM MOMENTO HABRA QUE HACER POP