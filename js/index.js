const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };

  function startGame() {
    class Background {
      constructor() {
        this.x = 0;
        this.y = 0;
        this.width = canvas.width;
        this.height = canvas.height;
        this.imagen = new Image();
        this.imagen.src = "images/road.png";
      }
      gameOver() {
        clearInterval(interval);
        ctx.font = "80px Avenir";
        ctx.fillText("Game Over", 50, 400);
      }
      draw() {
        this.y++;
        if (this.y > canvas.height) this.y = 0;
        ctx.drawImage(this.imagen, this.x, this.y, this.width, this.height);
        ctx.drawImage(
          this.imagen,
          this.x,
          this.y - this.height,
          this.width,
          this.height
        );
        let score = Math.floor(frames / 100);
        ctx.fillStyle = "black";
        ctx.font = "40px Avenir";
        ctx.fillText(`Score: ${score}`, 20, 50);
      }
    }

    class Car {
      constructor() {
        this.x = 225;
        this.y = 500;
        this.width = 50;
        this.height = 100;
        this.image = new Image();
        this.image.src = "images/car.png";
      }
      collision(item) {
        return (
          this.x < item.x + item.width &&
          this.x + this.width > item.x &&
          this.y < item.y + item.height &&
          this.y + this.height > item.y
        );
      }
      draw() {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
      }
    }

    const fondo = new Background();
    const car = new Car();

    class Enemy {
      constructor() {
        this.x = Math.floor(Math.random() * canvas.width - 120);
        this.y = -20;
        this.width = Math.floor(Math.random() * 100 + 100);
        this.height = 20;
      }
      draw() {
        if (frames % 10) this.y += 5;
        ctx.fillStyle = "red";
        ctx.fillRect(this.x, this.y, this.width, this.height);
      }
    }

    var enemies = [];

    function generateEnemies() {
      if (frames % 100 == 0) {
        var enemy = new Enemy();
        enemies.push(enemy);
      }
    }

    function drawingEnemies() {
      enemies.forEach(function(enemy) {
        enemy.draw();
        // Checamos colisiones
        if (car.collision(enemy)) {
          // Ejecutaremos el gameOver
          fondo.gameOver();
        }
      });
    }

    var frames = 0;
    var interval = setInterval(function() {
      frames++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      fondo.draw();
      car.draw();
      generateEnemies();
      drawingEnemies();
    }, 1000 / 60);

    addEventListener("keydown", function(event) {
      if (event.keyCode === 37) {
        car.x -= 30;
      }
      if (event.keyCode === 39) {
        car.x += 30;
      }
    });
  }
};
