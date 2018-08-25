var canvas = document.getElementById("canvas");
var canvas2 = document.getElementById("canvas2");
var ctx = canvas.getContext("2d");
var ctx2 = canvas2.getContext("2d");

var score = 0;

class Car {
  constructor() {
    this.x = 175;
    this.y = 510;
    this.width = 50;
    this.height = 80;
    this.image1 = new Image();
    this.image1.src = "./images/car.png";
  }
  draw() {
    ctx.drawImage(this.image1, this.x, this.y, this.width, this.height);
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

class Background {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.width = canvas.width;
    this.height = canvas.height;
  }
  draw() {
    // Gray Area
    ctx.beginPath();
    ctx.fillStyle = "gray";
    ctx.fillRect(0, 0, 400, 600);
    // First Green Area
    ctx.beginPath();
    ctx.fillStyle = "green";
    ctx.fillRect(0, 0, 25, 600);
    // Second Green Area
    ctx.beginPath();
    ctx.fillStyle = "green";
    ctx.fillRect(375, 0, 25, 600);
    // Left White Line
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.fillRect(40, 0, 15, 600);
    // Right White Line
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.fillRect(345, 0, 15, 600);
    // Middle line
    ctx.beginPath();
    ctx.moveTo(199, 0);
    ctx.lineWidth = 5;
    ctx.setLineDash([15, 7]);
    ctx.lineTo(199, 600);
    ctx.strokeStyle = "white";
    ctx.stroke();
  }
}

class Obstacle {
  constructor() {
    // Origen en X entre 20 y 205
    this.x = Math.floor(Math.random() * 180) + 25;
    this.y = -1;
    // Largo entre 50 y 170
    this.width = Math.floor(Math.random() * 120) + 50;
    this.height = 25;
  }
  draw() {
    ctx.beginPath();
    ctx.fillStyle = "#870007";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  // Para mover los obstáculos hacia abajo
  moveDown() {
    this.y += 15;
  }
}

class Score {
  draw() {
    ctx2.beginPath();
    ctx2.fillStyle = "black";
    ctx2.fillRect(0, 0, 400, 300);
    ctx2.font = "20px Avenir";
    ctx2.fillStyle = "white"
    ctx2.fillText("Score: " + score, 20, 20);
  }
  gameOver() {
    ctx2.font = "40px Avenir";
    ctx2.fillStyle = "white"
    ctx2.fillText("GAME OVER PERRO", 15, 70);
  }
}

window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    document.getElementById("start-button").disabled = true;
    score = 0;
    startGame();
  };

  function startGame() {
    ctx.clearRect(0, 0, 400, 600);
    var car = new Car();
    var fondo = new Background();
    var punkt = new Score();
    var obstacles = [];
    var frames = 0;

    var interval = setInterval(function() {
      frames++;
      ctx.clearRect(0, 0, 400, 600);
      fondo.draw();
      car.draw();
      punkt.draw();
      generateObstacles();
      drawObstacles(frames);
    }, 1000 / 60);

    addEventListener("keydown", function(event) {
      // Left Arrow // Right Arrow
      if (event.keyCode === 37) {
        // Límite izquierdo
        if (car.x >= 50) {
          car.x -= 30;
        }
      } else if (event.keyCode === 39) {
        // Límite derecho
        if (car.x <= 300) {
          car.x += 30;
        }
      }
    });
    function generateObstacles() {
      if (frames % 140 === 0) {
        let obstacle = new Obstacle();
        obstacles.push(obstacle);
        // La cantidad de puntos es igual al tamaño del arreglo hasta este punto - 3
        if(obstacles.length > 3) {
          score = obstacles.length - 3;
        }
      }
    }
    function drawObstacles(frames) {
      obstacles.forEach(function(obstacle) {
        // Mueve los obstáculos hacia abajo
        if (frames % 10 === 0) {
          obstacle.moveDown();
        }
        obstacle.draw();
        if (car.collision(obstacle)) {
          clearInterval(interval);
          punkt.gameOver();
          document.getElementById("start-button").disabled = false;
        }
      });
    }
  }
};
