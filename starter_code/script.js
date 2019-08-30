window.onload = function() {
  const myCanvasDOMEl = document.querySelector("#myCanvas");
  const ctx = myCanvasDOMEl.getContext("2d");
  const w = window.innerWidth;
  const h = window.innerHeight;
  const w2 = w / 2;
  const h2 = h / 2;
  let counter = 0;
  const speed = 15;
  let speedLine = 5;
  let myObstacles = [];

  function setCanvasDimensions() {
    // x axis
    myCanvasDOMEl.setAttribute("width", `${w2}px`);
    // y axis
    myCanvasDOMEl.setAttribute("height", `${h - 30}px`);
  }
  setCanvasDimensions();
  window.onresize = setCanvasDimensions;

  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  class Obstacles {
    constructor(width, height, color, x, y) {
      this.width = width;
      this.height = height;
      this.color = color;
      this.x = x;
      this.y = y;
    }
    update() {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    newPos() {
      this.y += speedLine;
    }
    removeObstacle() {
      if (this.y > h + this.height) {
        myObstacles.pop();
      }
    }
  }

  function updateObstacles() {
    if (counter % 120 === 0) {
      let minWidth = 20;
      let maxWidth = 200;
      let width = Math.floor(
        Math.random() * (maxWidth - minWidth + 1) + minWidth
      );
      let minGap = 50;
      let maxGap = 200;
      let gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
      myObstacles.push(new Obstacles(width, 20, "brown", width, 0));
      
      myObstacles.push(new Obstacles(width, 20, "brown", width + gap, 0));
      for (i = 0; i < myObstacles.length; i++) {
        myObstacles[i].newPos();
        myObstacles[i].update();
        myObstacles[i].removeObstacle();
      }
    }
  }

  // let obstacle1 = (randomInt(150, 250), 15, "brown", randomInt(110, 720), 0)
  // let obstacle2 = (randomInt(150, 250), 15, "brown", randomInt(110, 720), 0)
  // let obstacle3 = (randomInt(150, 250), 15, "brown", randomInt(110, 720), 0)
  // let obstacle4 = (randomInt(150, 250), 15, "brown", randomInt(110, 720), 0)

  function startGame() {
    setCanvasDimensions();
    // speedLine = 0;

    function drawGameBackground() {
      ctx.fillStyle = "green";
      ctx.fillRect(0, 0, w2, h);
      ctx.fillStyle = "grey";
      ctx.fillRect(80, 0, w2 - (w2 * 1) / 5, h);
      ctx.fillStyle = "white";
      ctx.fillRect(100, 0, 10, h);
      ctx.fillRect(770, 0, 10, h);
      ctx.setLineDash([40, 15]);
      ctx.strokeStyle = "white";
      ctx.lineDashOffset += speedLine;
      ctx.beginPath();
      ctx.lineWidth = 7;
      ctx.moveTo(w2 / 2, 0);
      ctx.lineTo(w2 / 2, h);
      ctx.stroke();
    }
    drawGameBackground();
    function resetCanvas() {
      ctx.clearRect(0, 0, w, h);
    }
    newCar = new Car(ctx, w2 / 2 - 40, h - 250);

    function moveCar() {
      window.onkeydown = function(e) {
        switch (e.key) {
          case "ArrowLeft":
            newCar.moveLeft();

            break;
          case "ArrowRight":
            newCar.moveRight();

            break;
        }
      };
    }
    this.intervalID = setInterval(() => {
      resetCanvas();
      setCanvasDimensions();
      speedLine -= 3;
      drawGameBackground(speedLine);
      newCar.drawCar();

      moveCar();
      updateObstacles();
      counter++;
    }, 1000 / 60);
  }
  class Car {
    constructor(ctx, xParam, yParam) {
      this.position = {
        x: xParam,
        y: yParam
      };
      this.car = new Image();
      this.car.src = "./images/car.png";

      this.position.x = w2 / 2 - 40;
      this.position.y = h - 250;

      this.car.onload = () => {
        ctx.drawImage(this.car, this.position.x, this.position.y, 80, 160);
      };
    }
    moveLeft() {
      this.position.x -= speed;
      if (this.position.x < 80) {
        this.position.x = 80;
      }
    }
    moveRight() {
      this.position.x += speed;
      if (this.position.x > w2 - (w2 * 1) / 5) {
        this.position.x = w2 - (w2 * 1) / 5;
      }
    }
    drawCar() {
      ctx.drawImage(this.car, this.position.x, this.position.y, 80, 160);
    }
  }
  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
};
