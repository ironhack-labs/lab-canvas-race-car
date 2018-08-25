window.onload = function() {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  var count = 0;

  var drawBoard = function() {
    //Rectangulo verde
    ctx.beginPath();
    ctx.fillStyle = "green";
    ctx.fillRect(0, 0, 30, 700);

    //Rectangulo gris
    ctx.fillStyle = "gray";
    ctx.fillRect(30, 0, 10, 700);

    //Linea blanca
    ctx.fillStyle = "white";
    ctx.fillRect(40, 0, 20, 700);

    //Carretera
    ctx.fillStyle = "gray";
    ctx.fillRect(60, 0, 500, 700);

    //Linea punteada
    ctx.beginPath();
    ctx.moveTo(310, 0);
    ctx.strokeStyle = "white";
    ctx.lineWidth = "4";
    ctx.setLineDash([15, 15]);
    ctx.lineTo(310, 700);
    ctx.stroke();

    //Linea blanca
    ctx.fillStyle = "white";
    ctx.fillRect(560, 0, 20, 700);

    //Rectangulo gris
    ctx.fillStyle = "gray";
    ctx.fillRect(580, 0, 10, 700);

    ctx.fillStyle = "green";
    ctx.fillRect(590, 0, 30, 700);
  };

  class Car {
    constructor() {
      this.x = 290;
      this.y = 630;
      this.width = 40;
      this.height = 70;
      this.image = new Image();
      this.image.src = "./images/car.png";
    }
    draw() {
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
    collision(item) {
      return (
        this.x < item.x + item.width &&
        this.x + this.width > item.x &&
        this.y < item.y + item.height &&
        this.y + this.height > item.y
      );
    }
  }

  class Obstacle {
    constructor() {
      this.x = Math.floor(Math.random() * 260 + 30);
      this.y = 0;
      this.width = Math.floor(Math.random() * 200 + 50);
      this.height = 20;
    }
    draw() {
      this.y += 3;
      ctx.fillStyle = "red";
      ctx.fillRect(this.x, this.y, this.width, this.height);
      if(this.y > 700) {
        count += 100;
        this.y = - 100;
      }
    }
  }

  var car = new Car();
  var interval = "";
  var obstacles = [];

  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    interval = setInterval(function() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawBoard();
      drawingObstacles();
      car.draw();
    }, 1000 / 60);
  }

  addEventListener("keydown", function(e) {
    if (e.keyCode === 37) {
      car.x > 60 ? (car.x -= 5) : (car.x = 60);
    }
    if (e.keyCode === 39) {
      car.x < 520 ? (car.x += 5) : (car.x = 520);
    }
  });

  var obsInterval = setInterval(function() {
    let obstacle = new Obstacle();
    obstacles.push(obstacle);
  }, 3000);

  function drawingObstacles() {
    obstacles.forEach(function(obstacle) {
      obstacle.draw();
      //score
      ctx.fillStyle = "white";
      ctx.font = '30px sans-serif';
      ctx.fillText(`Score: ${count}`, 100, 100);
      if (car.collision(obstacle)) {
        gameOver();
      }
    });
  }

  function gameOver() {
    clearInterval(interval);
    clearInterval(obsInterval);
    ctx.fillStyle = "black";
    ctx.font = "50px Avenir";
    ctx.fillText("Game Over", 200, 300);
    //score
    ctx.font = '30px sans-serif';
    ctx.fillText(`Your final score: ${count}`, 180, 350);
  }
};
