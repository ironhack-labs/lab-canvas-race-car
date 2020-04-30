//CAR
let imgCar;

class Car {
  constructor() {
    this.width = 52.6;
    this.height = 106.3;
    this.x = canvas.width / 2 - this.width / 2;
    this.y = canvas.height - this.height - 10;
    this.speedX = 25;
    this.lives = 3;
  }

  drawCar() {
    imgCar = new Image();
    imgCar.src = "../images/car.png";
    ctx.drawImage(imgCar, this.x, this.y, this.width, this.height);
  }

  moveRight() {
    if (this.x < canvas.width - this.width) {
      this.x += this.speedX;
    }
  }

  moveLeft() {
    if (this.x >= 0) {
      this.x -= this.speedX;
    }
  }

  gameOverScreen() {
    // let enemiesLeft = this.enemies.length;
    // let finalScore = enemiesLeft * 10;
    let html = document.getElementById("main").innerHTML;
    html = `
            <div class="game-over">
              <h1>GAME OVER</h1>
              <p>Your final score: 0
            </div>`;
  }

  checkCollisionEnemy(enemy, index) {
    let carTotalX = this.x + this.width;
    let carTotalY = this.y + this.height;
    let enemyTotalX = enemy.x + enemy.width;

    if (
      carTotalX > enemy.x &&
      carTotalX < enemyTotalX &&
      enemy.y >= carTotalY
    ) {
      if (this.lives > 0) {
        --this.lives;
        game.enemies.splice(index, 1);
      } else if (this.lives === 0) {
        let enemiesLeft = game.enemies.length;
        let finalScore = enemiesLeft * 10;
        let mainContent = document.getElementById("main");
        mainContent.innerHTML = `
        <div class="game-over">
          <h1>GAME OVER</h1>
          <p>Your final score: ${finalScore}</p>
        </div>`;
        game.isGameOver = true;
      }
    }

    return false;
  }

  loseLive() {
    --this.lives;
  }
}
