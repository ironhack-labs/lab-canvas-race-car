const OBSTACLE_FRAMES = 120;

class Game {
    constructor(ctx) {
        this.ctx = ctx;

        this.background = new Background (ctx);
        this.car = new Car(ctx, 218, 350)

        this.obstacles = [];

        this.intervalId = undefined;
        this.fps = 1000 / 60;

        this.obstaclesFramesCount = 0;

        this.score = 0;
    }

    start() {
        if(!this.intervalId) {
            this.intervalId = setInterval(() => {
                if (this.obstacleFramesCount % OBSTACLE_FRAMES === 0) {
                    this.addObstacle();
                    this.obstacleFrameCount = 0;
                }
                this.clear();
                this.move();
                this.draw();

                this.checkCollissions()
                this.obstacleFramesCount++
             }, this.fps)
      
    }
    }
    clear() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)

        const previousObstaclesLength = this.obstacles.length

        this.obstacles = this.obstacles.filter(obstacle => obstacle.x + obstacle.width > 0)
    
        if (this.obstacles.length < previousObstaclesLength) {
          this.score++
        }
    }

    move() {
        this.obstacles.forEach(obstacle => obstacle.move());
        this.background.move();
        this.car.move();
    }

    draw() {
        this.obstacles.forEach(obstacle => obstacle.draw())
        this.background.draw();
        this.car.draw();
    }

    drawScore() {


    }

    addObstacle() {
        const max = this.ctx.canvas.width - 100;

        const x = Math.floor(Math.random() * max);

        this.obstacles.push(
            new Obstacle (this.ctx, this.ctx.canvas.width, x)
        )
    }

    setUpListeners(event) {
        this.car.setUpListeners(event);
    }

    checkCollissions() {
        const condition = this.obstacles.some(obstacle => this.car.collidesWith(obstacle))
    
        if (condition) {
          this.gameOver();
        }
      }
    
}