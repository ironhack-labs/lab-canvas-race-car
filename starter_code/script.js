window.onload = () =>
  (document.getElementById("start-button").onclick = startGame);

function startGame() {
  const myCanvasDOMEl = document.getElementById("myCanvas");
  const ctx = myCanvasDOMEl.getContext("2d");
  const w = 400;
  const h = 580;
  const w2 = w / 2;
  const h2 = h / 2; 
  const speed = 8;
  const lineSpeed = 8;
  let counter = 0;
  let obstacles = [];
  let intervalID = undefined

  intervalID = setInterval(() => {
    ctx.clearRect(0, 0, w, h);
    setCanvasDimensions();
    drawBackground();
    drawDashedLine();
    drawCar();
    moveCar();
    if (counter % 60 === 0) {
      obstacles.push(
        new Obstacle(ctx, randomInt(60, 350), 0, speed, randomInt(20, 180), randomInt(20, 40))
      );
    }
    drawObstacles();
    counter++
  }, 1000/60);

  function setCanvasDimensions() {
    myCanvasDOMEl.setAttribute("width", `${w}px`);
    myCanvasDOMEl.setAttribute("height", `${h}px`);
  }

  function drawBackground() {
    // Green bkg
    ctx.beginPath();
    ctx.rect(0, 0, `${w}`, `${h}`);
    ctx.fillStyle = "#008100";
    ctx.fill();
    ctx.closePath();

    // Grey bkg
    ctx.beginPath();
    ctx.rect(25, 0, `${w - 50}`, `${h}`);
    ctx.fillStyle = "#808080";
    ctx.fill();
    ctx.closePath();

    // Line 1
    ctx.beginPath();
    ctx.rect(35, 0, 10, `${h}`);
    ctx.fillStyle = "#ffffff";
    ctx.fill();
    ctx.closePath();

    // Line 2
    ctx.beginPath();
    ctx.rect(`${w - 45}`, 0, 10, `${h}`);
    ctx.fillStyle = "#ffffff";
    ctx.fill();
    ctx.closePath();
  }
  
  
  function drawDashedLine() {
    const lineWidth = 5;
    const lineHeight = 20;
    const lineGap = 30
    const lineColor = "#FFF"

    ctx.beginPath();
    ctx.setLineDash([lineHeight, lineGap]);
    ctx.moveTo(w2 - lineWidth / 2, h + (counter * lineSpeed));
    ctx.lineTo(w2, 0);
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = lineColor;
    ctx.stroke();
    ctx.closePath();
  }

  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  let positions = {
    x: w2 - 35 / 2,
    y: h - 100
  };

  class Obstacle {
    constructor(ctx, x, y, speed, w, h) {
      this.ctx = ctx;
      this.x = x;
      this.y = y;
      this.speed = speed;
      this.w = w;
      this.h = h
    }
  
    draw() {
      this.ctx.beginPath();
      this.ctx.rect(this.x, ++this.y * this.speed, this.w, this.h);
      this.ctx.fillStyle = "#890000";
      this.ctx.fill();
    }
  }



  if (obstacles.length !== 0) drawObstacles();

  function drawObstacles() {
    obstacles.forEach((obstacle) => {
      if (
        positions.x + 20 > obstacle.x &&
        positions.x < obstacle.x + 20 &&
        positions.y - 20 <= obstacle.y * speed
      ) clearInterval(intervalID)

      obstacle.draw();
    });
  }

  function drawCar() {
    let car = new Image();
    car.src = "images/car.png";
    ctx.drawImage(car, positions.x, positions.y, 35, 79.75);
  }

  function moveCar() {
    window.onkeydown = function(e) {
      switch (e.key) {
        case "ArrowLeft":
          if (positions.x > 45) {
            positions.x -= speed;
          } else {
            console.log("se sale");
          }
          break;
        case "ArrowRight":
          if (positions.x < 310) {
            positions.x += speed;
            
          } else {
            console.log("se sale");
          }
          break;
      }
    };
  }
}
