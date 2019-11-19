class BoardCanvas {
  constructor(){
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
  }

  createBoard(){
    let w = this.canvas.width;
    let h = this.canvas.height;
    this.ctx.clearRect(0, 0, w, h);
    this.ctx.fillStyle = "green";
    this.ctx.fillRect(0, 0, w, h);
    this.ctx.fillStyle = "gray";
    this.ctx.fillRect(30, 0, w - 60, h);
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(40, 0, 10, h);
    this.ctx.fillRect(w - 50, 0, 10, h);
    this.ctx.lineWidth = 7;
    this.ctx.strokeStyle = "white";
    this.ctx.setLineDash([30,20]);
    this.ctx.beginPath();
    this.ctx.moveTo(w/2, h);
    this.ctx.lineTo(w/2,0);
    this.ctx.stroke();
  }
}

class CarCanvas {
  constructor(){
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.xPos = this.canvas.width / 2;
    this.yPos = this.canvas.height * 4 / 5;
    this.width = 50;
    this.height = 100;
    this.img = new Image();
    this.img.src = "./images/car.png";
  }
  createCar(){
    this.img.onload = () => {
      this.ctx.drawImage(this.img, this.xPos - 0.5 * this.width, this.yPos, this.width, this.height);
    };
  }
}

window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    boardCanvas = new BoardCanvas()
    boardCanvas.createBoard();
    car = new CarCanvas();
    car.createCar();
  }
};
