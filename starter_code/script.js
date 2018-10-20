window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  var canvas = document.getElementById("road");
  canvas.width = 400;
  canvas.height = 600;
  var ctx = canvas.getContext("2d");

  function Car() {
    this.width = 50;
    this.height = 100;
    this.x = 200;
    this.y = 490;
  }

  Car.prototype.draw = function() {
    var img = new Image();
    img.onload = () => {
      ctx.drawImage(
        img,
        this.x - this.width / 2,
        this.y - this.height / 2,
        this.width,
        this.height
      );
    };
    img.src = "./images/car.png";
  };

  var playerCar = new Car();

  function drawBoard() {
    //grass
    ctx.fillStyle = "green";
    ctx.fillRect(0, 0, 400, 600);

    //road
    ctx.fillStyle = "grey";
    ctx.fillRect(20, 0, 360, 600);

    //borders
    //border-left
    ctx.fillStyle = "white";
    ctx.fillRect(30, 0, 20, 600);
    //border-right
    ctx.fillRect(350, 0, 20, 600);

    //middle-road line
    ctx.beginPath();
    ctx.setLineDash([30, 10]);
    ctx.moveTo(200, 10);
    ctx.lineTo(200, 590);
    ctx.strokeStyle = "white";
    ctx.lineWidth = "5";
    ctx.stroke();
    playerCar.draw();
  }

  function startGame() {
    drawBoard();
  }

  //move the car

  function moveLeft() {
    playerCar.x -= 25;
    drawBoard();
  }

  function moveRight() {
    playerCar.y += 25;
    drawBoard();
  }

  document.onkeydown = function(e) {
    switch (e.keyCode) {
      case 37:
        moveLeft();
        break;
      case 39:
        moveRight();
        break;
    }
  };
};
