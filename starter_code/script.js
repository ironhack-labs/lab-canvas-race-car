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
    ctx.fillStyle = "green";
    ctx.fillRect(0, 0, 400, 600);
    ctx.fillStyle = "grey";
    ctx.fillRect(20, 0, 360, 600);
    ctx.fillStyle = "white";
    ctx.fillRect(40, 0, 20, 600);
    ctx.fillStyle = "white";
    ctx.fillRect(340, 0, 20, 600);
    ctx.beginPath();
    ctx.setLineDash([20, 10]); /*dashes are 5px and spaces are 3px*/
    ctx.lineWidth = "5";
    ctx.strokeStyle = "white";
    ctx.moveTo(200, 10);
    ctx.lineTo(200, 590);
    ctx.stroke();
    playerCar.draw();
    obstacles.forEach(function(obstacle) {
      obstacle.draw();
    });
  }

  function startGame() {
    drawBoard();
  }

  function leftArrowPressed() {
    playerCar.x -= 25;
    drawBoard();
  }

  function rightArrowPressed() {
    playerCar.x += 25;
    drawBoard();
  }

  document.onkeydown = moveSelection;

  function moveSelection(event) {
    switch (event.keyCode) {
      case 37:
        leftArrowPressed();
        break;

      case 39:
        rightArrowPressed();
        break;
    }
  }

  var obstacles = [];

  function Obstacle() {
    minWidth = 50;
    maxWidth = 200;
    minX = 40;
    maxX = 300;
    this.x = Math.floor(Math.random()*(maxX-minX+1)+minX);
    this.width = Math.floor(Math.random()*(maxX-minX+1)+minX);
    //Math.floor(Math.random()*());
    this.y = 0;
    //Math.floor(Math.random()*());
    this.height = 20;
    this.color = "#cb4154"
    this.draw = function() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    };
  }

  var counter = 0;
  setInterval(function() {
    console.log("OK");
    counter += 1;
    obstacles.forEach(function(obstacle) {
      obstacle.y += 10;
    });
    if (counter % 20 === 0) {
      console.log("NOK")
      obstacles.push(new Obstacle());
    }
    drawBoard();
  }, 100);
};
