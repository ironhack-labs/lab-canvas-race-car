window.onload = function () {
  document.getElementById("start-button").onclick = function () {
    startGame();
  };

  let gameCanvas = new carCanvas();

  document.onkeydown = (e) => {
    switch(e.keyCode){
      case 37: // esquerda
        if(gameCanvas.carX >= 85){
          gameCanvas.carX -= 15;
        }
        break;
      case 38: // frente
        if(gameCanvas.carY >= 30){
          gameCanvas.carY -= 40;
        }
        break;
      case 39: // direita
        if(gameCanvas.carX <= 265){
          gameCanvas.carX += 15;
        }
        break;
      case 40: // tras
        if(gameCanvas.carY <= 8650){
          gameCanvas.carY += 40;
        }
        break;
    }
  };

  function startGame() {
    setInterval(() => {
      gameCanvas.resetBoard();
      gameCanvas.drawMap();
    }, 20);
  }
};

class carCanvas {
  constructor() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.carX = 175;
    this.carY = 8655;
  }

  resetBoard() {
    this.ctx.clearRect(0,0,500,9000);
  }

  drawMap() {
    //grama
    this.ctx.fillStyle = "green";
    this.ctx.fillRect(0, 0, 500, 9000);

    //concreto
    this.ctx.fillStyle = "gray";
    this.ctx.fillRect(50, 0, 400, 9000);

    //LINHAS
    this.ctx.fillStyle = "white";
    this.ctx.strokeStyle = "white";
    //linha esquerda
    this.ctx.fillRect(55, 0, 10, 9000);
    //linha direita
    this.ctx.fillRect(435, 0, 10, 9000);
    //linha pontilhada
    this.ctx.beginPath();
    this.ctx.lineWidth = 5;
    this.ctx.setLineDash([30, 15]);
    this.ctx.moveTo(250, 0);
    this.ctx.lineTo(250, 9000);
    this.ctx.stroke();
    this.ctx.closePath();

    this.drawCar();
  }

  drawCar() {
    let car = new Image();
    car.src = "./images/car.png";
    car.onload = () => {
      this.ctx.drawImage(car, this.carX, this.carY, 150, 303);
    }
  }

  // drawObstacles() {
  //   let randomWidth = Math.floor(Math.random() * 200) + 80;
  //   let randomX = Math.floor(Math.random() * (360 - randomWidth)) + 65;
  //   this.ctx.fillStyle = 'red';
  //   this.ctx.fillRect();

  // }

}

// class Obstacle {
//   constructor() {
//     this.width =  Math.floor(Math.random() * 200) + 80;
//     this.x = Math.floor(Math.random() * (360 - randomWidth)) + 65;
//   }
// }