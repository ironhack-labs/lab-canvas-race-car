window.onload = function() {
  const myCanvasDOMEl = document.querySelector("#myCanvas");
  const ctx = myCanvasDOMEl.getContext("2d");
  const w = 700;
  const h = window.innerHeight;
  const w2 = w / 2;
  const h2 = h / 2;
  let counter = 0;
  let setIntervalID = undefined;

  document.getElementById("start-button").onclick = function() {
    startGame();
    function setCanvasDimensions() {
      myCanvasDOMEl.setAttribute("width", w);
      myCanvasDOMEl.setAttribute("height", h);
    }
    setCanvasDimensions();

    window.onresize = setCanvasDimensions;
  };

  function startGame() {
    let setIntervalID = setInterval(() => {
      clear();
      drawBackground();
      drawDashedLine();
      drawCar();
      moveCar();
      counter++;
    }, 1000 / 60);
  }

  function drawBackground() {
    ctx.beginPath();
    ctx.fillStyle = "#438200";
    ctx.fillRect(0, 0, w, h);
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = "#808080";
    ctx.fillRect(100, 0, w - 200, h);
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(115, 0, w / 30, h);
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(w - 140, 0, w / 30, h);
    ctx.closePath();
  }

  const speed = 10;

  function drawDashedLine() {
    ctx.beginPath();
    ctx.strokeStyle = "#ffffff";
    ctx.setLineDash([50, 50]);
    ctx.moveTo(w2, h + counter * speed);
    ctx.lineTo(w2, 0);
    ctx.lineWidth = w / 60;
    ctx.stroke();
    ctx.closePath();
  }
  const car = new Image();
  car.src = "images/car.png";
  let carX = w2 - 50;
  let carY = h - 210;

  function drawCar() {
    ctx.drawImage(car, carX, carY, 100, 200);
  }

  function moveLeft() {
    carX -= speed;
  }

  function moveRight() {
    carX += speed;
  }

  function moveCar() {
    window.onkeydown = function(e) {
      switch (e.key) {
        case "ArrowLeft":
          moveLeft();
          break;
        case "ArrowRight":
          moveRight();
          break;
      }
    };
  }
  function clear() {
    ctx.clearRect(0, 0, w, h);
  }
};
