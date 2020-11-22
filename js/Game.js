class Game {
    constructor(canvas, context) {
      this.canvas = canvas;
      this.context = context;
      this.score = 0;
      this.background = new Image();
      this.background.src = "./images/road.png";
      this.car = new Car(
        this.canvas.width / 2 - 17,
        (this.canvas.height / 4) * 3,
        this.context
      );
      this.obstacles = [];
    }
  
    init() {
      this.updateCanvasInterval = setInterval(this.updateCanvas, 50);
      this.startObsticleInterval = setInterval(this.startObsticle, 3500);
    }
  
    updateCanvas = () => {
      this.context.drawImage(
        this.background,
        0,
        0,
        this.canvas.width,
        this.canvas.height
      );
      this.car.draw();
      this.obstacles.forEach((obstacle, i) => {
        obstacle.draw();
        const collision = obstacle.collisionDetection(this.car);
        if (collision) {
          this.gameOver();
        }
        if (obstacle.y > this.canvas.height) {
          this.score++;
          this.obstacles.splice(i, 1);
        }
      });
      console.log(this.score);
    };
  
    startObsticle = () => {
      const width = 100 + Math.random() * 100;
      const x = (this.canvas.width - width) * Math.random();
      const obstacle = new Obstacle(x, 0, width, this.context);
      this.obstacles.push(obstacle);
    };
  
    gameOver = () => {
      clearInterval(this.updateCanvasInterval);
      clearInterval(this.startObsticleInterval);
    };
  }