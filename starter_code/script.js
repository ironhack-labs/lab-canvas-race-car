window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };
};

function startGame() {
  const myCanvasDOMEl = document.querySelector("#myCanvas");
  const ctx = myCanvasDOMEl.getContext("2d");
  const w = 600;
  const h = window.innerHeight;
  const speed = 20;
  const speedLine = 5;
  let counter = 0;
  // let interval = undefined;

  setInterval(() => {
    ctx.clearRect(0, 0, w, h);
    setCanvasDimensions();
    drawRoad();
    drawCar();
    moveCar();
    counter++;
  }, 1000 / 60);

  function setCanvasDimensions() {
    myCanvasDOMEl.setAttribute("width", `${w}px`);
    myCanvasDOMEl.setAttribute("height", `${h}px`);
  }

  function drawRoad() {
    ctx.beginPath();
    ctx.fillStyle = "green";
    ctx.fillRect(0, 0, w, h);
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = "grey";
    ctx.fillRect(30, 0, 540, h);
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.fillRect(60, 0, 10, h);
    ctx.fillRect(530, 0, 10, h);
    ctx.closePath();

    ctx.strokeStyle = "white";
    ctx.setLineDash([30, 30]);
    ctx.moveTo(w / 2, h + counter * speedLine);
    ctx.lineTo(w / 2, 0);
    ctx.lineWidth = 10;
    ctx.stroke();
  }

  let positions = {
    x: w / 2 - 75,
    y: h - 210
  };

  function drawCar() {
    let car = new Image();
    car.src = "images/car.png";
    ctx.drawImage(car, positions.x, positions.y, 150, 200);
  }

  function moveCar() {
    window.onkeydown = function(e) {
      switch (e.key) {
        case "ArrowLeft":
          positions.x -= speed;
          if (positions.x <= 30) {
            positions.x = 30;
          }
          break;
        case "ArrowRight":
          positions.x += speed;
          if (positions.x >= 420) {
            positions.x = 420;
          }
          break;
      }
    };
  }
}
