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
      this.ctx.drawImage(this.img, this.xPos - 0.5 * this.width, this.yPos, this.width, this.height);
  }

  moveCar(){
    window.onkeydown = (e) =>{
      switch(e.key){
        case "ArrowLeft":
          this.xPos -= 20;
          if (this.xPos <= 70){
            this.xPos = 70;
          }
          break;
        case "ArrowRight":
          this.xPos += 20;
          if (this.xPos >= 330){
            this.xPos = 330;
          }
          break;
      }
    }
  }

  isTouching(obstacle){
    let x1 = this.xPos;
    let y1 = this.yPos;
    let w1 = this.width;
    let h1 = this.height;
    let x2 = obstacle.x;
    let y2 = obstacle.y;
    let w2 = obstacle.width;
    let h2 = obstacle.height;

    if (Math.abs(y2 - y1) <= 0.8*h2){
      if ((x2 - 0.5*w1 <= x1) && (x1 <= x2 + w2 + 0.5 * w1)){
        return true;
      }
    }
    return false;
  }
}

class ObstacleCanvas {
  constructor(){
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");

    this.width = 50 + Math.floor(Math.random() * 150);
    this.height = 15;
    this.x = 80 + Math.floor(Math.random() * 300 - this.width);
    this.y = 0;
  }

  createObs(){
    this.ctx.fillStyle='red';
    this.ctx.fillRect(this.x,this.y, this.width,this.height);
    this.y += 1;
  }
}

window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    boardCanvas = new BoardCanvas()
    car = new CarCanvas();
    let frames = 0;
    let obstacles = [];
    let intervalID = setInterval(()=>{
      frames += 1;
      boardCanvas.createBoard();
      car.createCar();
      // car.ctx.fillText("X", car.xPos, car.yPos);
      car.moveCar()
      obstacles.forEach(block => {
        if(car.isTouching(block)){
          alert("Game over");
          clearInterval(intervalID)
        }
      });
      if (frames % 300 == 0){
        obstacles.push(new ObstacleCanvas());
      }
      obstacles.forEach(block => block.createObs());
    }, 1000/60);

  }

};
