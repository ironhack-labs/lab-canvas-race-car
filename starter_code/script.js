window.onload = function () {
  const myCanvasDOMEl = document.querySelector("#myCanvas");
  const ctx = myCanvasDOMEl.getContext('2d');
  const w = 402;
  const h = 652;


  function setCanvasDimensions() {
    // x axis
    myCanvasDOMEl.setAttribute("width", `${w}px`);
    // y axis
    myCanvasDOMEl.setAttribute("height", `${h}px`);
  }


  window.onresize = setCanvasDimensions;


  document.getElementById("start-button").onclick = function () {
    startGame();
  };


  function startGame() {
    setCanvasDimensions();
    let counter = 0;
    var setIntervalID = setInterval(() => {
      clear();
      drawBackground(counter);
      counter++;
      let car = new Car(ctx, 201, 326);



    }, 1000 / 60);
  }

  const speed = 10;

  class Car {
    constructor(ctx, xParam, yParam) {
      this.positions = {
        x: xParam,
        y: yParam
      };

      this.gameCharacter = new Image();
      this.gameCharacter.src = "./images/car.png";
      this.gameCharacter.onload = () => {
        ctx.drawImage(
          this.gameCharacter,
          this.positions.x,
          this.positions.y,
          50,
          100,
        );
      };
    }

    drawCar() {

    }

    moveLeft() {
      this.positions.x -= speed;
      this.gameCharacter, this.positions.x, this.positions.y;

    }

    moveRight() {
      this.positions.x += speed;
      this.gameCharacter, this.positions.x, this.positions.y;
    }
  }


  let car = new Car(ctx, 201, 326);

  window.onkeydown = function (e) {
    switch (e.key) {
      case "ArrowLeft":
        car.moveLeft();
        break;
      case "ArrowRight":
        car.moveRight();
        break;
    };
  }


  function drawBackground(counter) {
    drawBackgroundGreen();
    backgroundX();
    drawBackgroundGrey();
    backgroundLines();
    discontinueLine(counter);
  }

  function drawBackgroundGreen() {
    ctx.beginPath();
    ctx.fillStyle = "#1F902B";
    ctx.fillRect(0, 0, w, h);
    ctx.closePath();
  }
  function backgroundX() {
    ctx.beginPath();
    ctx.fillStyle = "#1F902B";
    ctx.fillRect(0, 0, w, h);
    ctx.closePath();
  }
  function drawBackgroundGrey() {
    ctx.beginPath();
    ctx.fillStyle = "#81868A";
    ctx.fillRect(25, 0, w - 50, h);
    ctx.closePath();
  }
  function backgroundLines() {
    //LINEA BLANCA IZQ
    ctx.beginPath();
    ctx.fillStyle = "#FDFFFE";
    ctx.fillRect(35, 0, 10, h);
    ctx.closePath();
    //LINEA BLANCA DCHA
    ctx.beginPath();
    ctx.fillStyle = "#FDFFFE";
    ctx.fillRect(357, 0, 10, h);
    ctx.closePath();
  }

  function discontinueLine(counter) {
    ctx.beginPath();
    ctx.strokeStyle = "white";
    ctx.lineWidth = 8;
    ctx.lineDashOffset = -counter * 3;
    ctx.setLineDash([50, 30]);
    ctx.moveTo(201, 0);
    ctx.lineTo(201, 652);
    ctx.stroke();
    ctx.closePath();
  }

  function clear() {
    ctx.clearRect(0, 0, w, h);
  }
}; 