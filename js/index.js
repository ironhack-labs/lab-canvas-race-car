window.onload = () => {
  //when window has loaded execute code

  const LIMIT_LEFT = 55;
  const LIMIT_RIGHT = 365;

  class Car {
    constructor() {
      this.x = 215;
      this.y = 550;
      this.w = 50;
      this.h = 90;
      this.vel = 10;
      this.imgCar = new Image();
      this.imgCar.src = "images/car.png";
    }
    print(ctx) {
      ctx.drawImage(this.imgCar, this.x, this.y, this.w, this.h);
    }
    moveLeft() {
      this.x -= this.vel;
      if(this.x < LIMIT_LEFT) this.x = LIMIT_LEFT;
    }
    moveRight() {
      this.x += this.vel;
      if(this.x > LIMIT_RIGHT) this.x = LIMIT_RIGHT;
    }
  }
  class Obstacle {
    constructor(canvas) {
      this.y = -30;
      this.w = Math.floor(Math.random()*((LIMIT_RIGHT-LIMIT_LEFT)/2 - 100)) + 100;
      this.x = Math.floor(Math.random()*(canvas.width - this.w));
      this.h = 30;
      this.vel = 10;
      this.color = "maroon";
    }
    print(ctx) {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.w, this.h);
    }
    move() {
      this.y += this.vel;
    }
  }
  class Game {
    constructor() {
      this.canvas = document.getElementById("canvas");
      this.ctx = this.canvas.getContext("2d");
      this.roadImg = document.createElement("img");
      this.roadImg.src = "images/road.png";
      this.car = new Car();
     


      this.obstacles = [];
      this.score = 0;
      this.intervalId = undefined;
      this.iteration = 0;
    }
    start() {



      if(this.intervalId == undefined) {
        this.intervalId = setInterval(()=>{
          this.iteration ++;
          this.clear();
          this.recalculate();
          this.print();
        }, 20);
      }
    }
    stop() {
      if(this.intervalId) clearInterval(this.intervalId);
    }
    clear() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    print() {
      console.log(this.ctx);
      this.ctx.drawImage(this.roadImg, 0, 0, this.canvas.width, this.canvas.height);
      this.car.print(this.ctx);
      this.obstacles.forEach(obstacle => {
        obstacle.print(this.ctx);
      });
    }
    recalculate() {
      if(this.iteration == 70) {
        let obstacle = new Obstacle(this.canvas);
        this.obstacles.push(obstacle);
        this.iteration = 0;
      }

      this.obstacles.forEach(obstacle => {
          obstacle.move();
          if(!( this.car.x + this.car.w < obstacle.x || 
            this.car.x > obstacle.x + obstacle.w || 
            this.car.y > obstacle.y + obstacle.h ||
            this.car.y + this.car.h < obstacle.y) ) {
              this.stop();
            }
      })
    }
  }

  let game = new Game();

  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    game.start();
  }

  // document.body.addEventListener()
  document.getElementsByTagName("body")[0].addEventListener("keydown", (event)=>{
    switch(event.key) {
      case "ArrowLeft":
        game.car.moveLeft();
        break;
      case "ArrowRight":
        game.car.moveRight();
        break;
    }
  });
};