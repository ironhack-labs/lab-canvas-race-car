window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };

  function startGame() {
    myRoadArea.road();
    myRaceCar.drawCar();
    myRaceCar.newPos();

    myRoadArea.clear();
  }
  //Area
  const myRoadArea = {
    road: function () {
      let ctx = canvas.getContext("2d");
      ctx.fillStyle = "grey";
      ctx.fillRect(60, 0, 300, 750);
      ctx.fillRect(370, 0, 10, 750);
      ctx.fillRect(40, 0, 10, 750);
      ctx.fillStyle = "green";
      ctx.fillRect(0, 0, 40, 750);
      ctx.fillRect(380, 0, 40, 750);
      ctx.beginPath();
      ctx.setLineDash([20, 35]);
      ctx.moveTo(210, 0);
      ctx.lineTo(210, 750);
      ctx.lineWidth = 5;
      ctx.strokeStyle = "white";
      ctx.stroke();
    },
    clear: function () {
      this.context.clear(0, 0, this.canvas.width, this.canvas.height);
    },
  };
};


//Car
class raceCar {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speedX = 0;
    this.speedY = 0;
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.img = new Image();

    this.img.src = "../images/car.png";
  }

  newPos() {
    this.x += this.speedX;
    
    document.addEventListener("keydown", (e) => {
      switch (e.Code) {
        case "ArrowLeft": // left arrow
          raceCar.speedX -= 1;
          break;
        case "ArrowRight": // right arrow
          raceCar.speedX += 1;
          break;
      }
    });

    document.addEventListener("keyup", (e) => {
      raceCar.speedX = 0;
      
    });
  }

  drawCar() {
    this.ctx.drawImage(this.img, this.x, this.y, 100, 100);
  }
}
const myRaceCar = new raceCar(162, 590);
//Logic
