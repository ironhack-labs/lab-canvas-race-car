/*class Game {
    constructor(ctx) {
      this.ctx = ctx;
      this.background = new Background(ctx);
      this.player = new Player(ctx, 50, 185, 30, 30, "red");
      this.obstacles = [];
      this.intervalId = null;
  
      this.levelSpeed = 2;
      this.counter = 0;
      this.score = 0;
    }
  
    start() {
      this.intervalId = setInterval(() => {
        this.clear();
        this.move();
        this.draw();
        this.checkCollisions();
        this.counter++;
  
        if (this.counter % 100 === 0) {
          this.addObstacle();
        }
  
        if (this.counter % 30 === 0) {
          this.score++;
        }
  
        if (this.counter === 200) {
          this.levelSpeed += 1;
          this.obstacles.forEach((obstacle) => obstacle.speed += 1);
          this.counter = 0;
        }
      }, 1000 / 160);
    }
  
    draw() {
      this.background.draw();  
      this.obstacles.forEach(obstacle => {
        obstacle.draw();
      });
      this.player.draw();
    }
  
    move() {
      this.background.move();  
      this.obstacles.forEach(obstacle => {
        obstacle.move();
      });
      this.player.move();
    }
  
    clear() {
      this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
      this.obstacles = this.obstacles.filter(obstacle => obstacle.y > obstacle.height);
    }
  
    addObstacle() {
      const height = 30;
      const randomWidth = Math.floor(Math.random() * 150) + 50;
      const randomX = Math.floor(Math.random() * (this.ctx.canvas.width - randomWidth));
      const color = "red";
      const speed = this.levelSpeed;
      const newObstacle = new Obstacle(this.ctx, randomX, this.ctx.canvas.height, randomWidth, height, color, speed);
      this.obstacles.push(newObstacle);
    }
  
    checkCollisions() {
      this.obstacles.forEach(obstacle => {
        if (this.player.x + this.player.width >= obstacle.x &&
          this.player.x <= obstacle.x + obstacle.width &&
          this.player.y + this.player.height >= obstacle.y &&
          this.player.y <= obstacle.y + obstacle.height) {
          this.gameOver();
        }
      });
    }
  
    gameOver() {
      clearInterval(this.intervalId);
      setTimeout(() => {
        this.clear();
        this.ctx.font = "42px Arial";
        this.ctx.fillStyle = "black";
        this.ctx.fillText(
          "Game Over",
          this.ctx.canvas.width / 2 - 100,
          this.ctx.canvas.height / 2,
          200);
        this.ctx.font = "18px Arial";
        this.ctx.fillText(
          `Your final score: ${this.score}`,
          this.ctx.canvas.width / 2 - 80,
          this.ctx.canvas.height / 2 + 50);
      }, 0);
    }
  
      
  
  }*/




class Game {
    constructor(ctx) {
        this.ctx = ctx;
        this.background = new Background(this.ctx);
        this.player = new Player(this.ctx);
        this.obstacles = [];

        this.levelSpeed = 2;
        this.counter = 0;
        this.score = 0;

        this.intervalId = null;
    }

    start() {
        this.intervalId = setInterval(() => {
            this.clear();
            this.move();
            this.draw();
            this.checkCollisions();
            this.counter++

            if (this.counter % 100 === 0) {
                this.addObstacles();
            }

            if (this.counter % 10 === 0) {
              this.score++;
            }

            if (this.counter === 200){
              this.levelSpeed += 1;
              this.obstacles.forEach((obstacle) => {
                obstacle.speed = this.levelSpeed;
              })
              this.counter = 0;
            }
        }, 1000 / 90)
    }

    draw() {
        this.background.draw();
        this.obstacles.forEach(obstacle => {
            obstacle.draw();
        });
        this.player.draw();
        this.drawScore();   
    }

    move() {
        this.background.move();
        this.obstacles.forEach(obstacle => {
            obstacle.move();
        })
        this.player.move(); 
    }


    clear() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.obstacles = this.obstacles.filter(obstacle =>  obstacle.y < this.ctx.canvas.height);
    }


    addObstacles(){
        const height = 30;
        const randomWidth = Math.floor(Math.random() * 120) + 50;
        const randomX = Math.floor(Math.random() * (this.ctx.canvas.width - randomWidth));
        const color = "red";
        const speed = this.levelSpeed;
        const newObstacle = new Obstacle(this.ctx, randomX, -height, randomWidth, height, color, speed);
        this.obstacles.push(newObstacle);
    }

    checkCollisions(){
        this.obstacles.forEach((obstacle) => {
          if (this.player.x + this.player.width >= obstacle.x &&
            this.player.x <= obstacle.x + obstacle.width &&
            this.player.y + this.player.height >= obstacle.y &&
            this.player.y <= obstacle.y + obstacle.height) {
            this.gameOver();
          }
        });
    }

    gameOver() {
      clearInterval(this.intervalId);
      setTimeout(() => {
        this.clear();
        this.ctx.font = "42px Impact";
        this.ctx.fillStyle = "black";
        this.ctx.fillText(
          "Game Over",
          this.ctx.canvas.width / 2 - 100,
          this.ctx.canvas.height / 2,
          200);
        this.ctx.font = "18px Impact";
        this.ctx.fillText(
          `Your final score: ${this.score}`,
          this.ctx.canvas.width / 2 - 80,
          this.ctx.canvas.height / 2 + 50);
      }, 0);
    }

    drawScore() {
      this.ctx.font = "22px Arial";
      this.ctx.fillStyle = "white";
      this.ctx.fillText(`Score: ${this.score}`, 70, 30);
    }

}     
