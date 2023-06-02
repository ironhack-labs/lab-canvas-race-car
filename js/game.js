class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.background = new Background(ctx);
    this.player = new Player(ctx, 224, 580);
    this.obstacles = [];
    this.intervalId = null;

    // this.levelSpeed = 2;
    // this.counter = 0;
    // this.score = 0;
  }

  start() {
    this.intervalId = setInterval(() => {
      this.clear();
      this.draw();
      this.move();
      //this.counter++;

      // if (this.counter % 100 === 0) {
      //   this.addObstacle();
      // }

      // if (this.counter % 10 === 0) {
      //   this.score++;
      // }

      // if (this.counter === 200) {
      //   this.levelSpeed += 1;
      //   this.obstacles.forEach((obstacle) => obstacle.speed += 1);
      //   this.counter = 0;
      // }
    }, 1000 / 60);
  }

  draw() {
    
    this.background.draw();
    // this.obstacles.forEach((obstacle) => {
    //   obstacle.draw();
    // });
    this.player.draw();
    //this.drawScore(); 
  }

  move() {
    this.background.move();
    // this.obstacles.forEach((obstacle) => {
    //   obstacle.draw();
    // });
    this.player.move();
  }

  clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    //this.obstacles = this.obstacles.filter((obstacle) => obstacle.x > -obstacle.height);
  }

  // addObstacle() {
  //   const height = 30;
  //   const randomwidth = Math.floor(Math.random() * 200) + 50;
  //   const randomX = Math.floor(Math.random() * (this.ctx.canvas.width - randomwidth));
  //   const color = "brown";
  //   const speed = this.levelSpeed;
  //   const newObstacle = new Obstacle(this.ctx, this.ctx.canvas.height, randomX, randomwidth, height, color, speed);
  //   this.obstacles.push(newObstacle);
  // }

  handleKeyDown(event) {
    if (!event.repeat) {
      switch (event.code) {
        case "ArrowLeft":
          this.player.speedX -= 5;
          break;
        case "ArrowRight":
          this.player.speedX += 5;
          break;
         case "ArrowUp":
           this.player.speedY = -5;
           break;
         case "ArrowDown":
           this.player.speedY = 5;
           break;
      }
    }
  }

  handleKeyUp(event) {
    if (event.code === "ArrowLeft" || event.code === "ArrowRight") {
      this.player.speedX = 0;
    }
     if (event.code === "ArrowUp" || event.code === "ArrowDown") {
       this.player.speedY = 0;
     }
  }

  // drawScore() {
  //   this.ctx.font = "22px Arial";
  //   this.ctx.fillStyle = "black";
  //   this.ctx.fillText(`Score: ${this.score}`, 10, 30);
  // }
}
