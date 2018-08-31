window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {}

  var canvas = document.getElementById("game-board");
  var ctx = canvas.getContext("2d");

  // place car
  // var img = document.getElementById("/images/logo.png");
  // ctx.drawImage(img, 10, 10);

  var imagen = new Image();

  imagen.src = "./images/car.png";

  function Carro() {
    this.x = 70;
    this.y = 490;
    this.ssdf;
  }
  // class Carro {
  //   constructor {
  //     this.x = 70;
  //     this.y = 490;

  //   }
  // }

  Carro();
  imagen.onload = function() {
    ctx.drawImage(imagen, x, y, 50, 100);
  };

  ctx.beginPath();
  ctx.fillStyle = "green";
  ctx.fillRect(0, 0, 600, 800);

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
  // find example with
  // moving square
  function right() {
    this.x++;
  }

  // move car left and right
  document.onkeydown = function(e) {
    switch (e.keyCode) {
      // flecha derecha
      case 39:
        right();
        break;
      // flecha izquierda
      // case 37:
      //   left();
      //   break;
    }
  };
};
