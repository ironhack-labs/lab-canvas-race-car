var myObstacles = [];

window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {}

  var canvas = document.getElementById("game-board");
  var ctx = canvas.getContext("2d");

  class Carro {
    constructor() {
      this.x = 70;
      this.y = 490;
      this.w = 50;
      this.h = 50;
      this.image = new Image();
      this.image.src = "./images/car.png";
      this.image.onload = () => {
        this.draw();
      };
    }
    draw() {
      ctx.drawImage(this.image, this.x, this.y, 50, 100);
    }
    left() {
      if (this.x < 50) return;
      this.x -= this.w;
    }
    right() {
      if (this.x > 500) return;
      this.x += this.w;
    }
  }

  function background() {
    ctx.beginPath();
    ctx.fillStyle = "green";
    ctx.fillRect(0, 0, 600, 800);

    ctx.setLineDash([0, 0]);
    ctx.fillStyle = "grey";
    ctx.fillRect(25, 0, 540, 600);
    ctx.strokeStyle = "white";
    ctx.lineWidth = 30;
    ctx.moveTo(50, 0);
    ctx.lineTo(50, 600);
    ctx.moveTo(530, 0);
    ctx.lineTo(530, 600);
    ctx.stroke();
    ctx.lineWidth = 10;

    ctx.moveTo(300, 0);
    ctx.lineTo(300, 600);
    ctx.setLineDash([15, 15]);
    ctx.stroke();
  }
  function obstacles() {
    let maxHeight = 600;
    let minHeight = 0;
    let y = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight);

    ctx.fillStyle = "red";

    ctx.fillRect(200, 20, 300, 30);
    ctx.fillRect(100, y, 150, 30);
  }
  document.onkeydown = function(e) {
    switch (e.keyCode) {
      // flecha derecha
      case 39:
        deLorean.right();
        break;
      // flecha izquierda
      case 37:
        deLorean.left();
        break;
    }
  };

  let deLorean = new Carro();
  deLorean.draw();

  var interval = setInterval(function() {
    background();
    obstacles();
    deLorean.draw();
  }, 1000 / 60);
};

// find example with
// moving square
// function right() {
//   this.x++;
// }

// // move car left and right
// document.onkeydown = function(e) {
//   switch (e.keyCode) {
//     // flecha derecha
//     case 39:
//       right();
//       break;
//     // flecha izquierda
//     // case 37:
//     //   left();
//     //   break;
//   }
