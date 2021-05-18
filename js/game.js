const OBSTACLE_FRAMES = 110

class Game {
    constructor(ctx) {
        this.ctx = ctx;

        this.interval = undefined;

        this.fps = 1000 / 60
        this.drawInterval = undefined;

        this.background = new Background(ctx);
        this.car = new Car(ctx);
        this.obstacles = [];

        this.obstaclesDrawCount = 0;

        this.obstacleSpeed = 3
    }

    start(){
        if (!this.drawInterval){
            
            this.drawInterval = setInterval(() => {
                this.clear();

                this.move();

                this.draw();

                this.checkCollisions();

                this.obstaclesDrawCount++

                if (this.obstaclesDrawCount % OBSTACLE_FRAMES === 0) {
                    this.addObstacles()
                }

            }, this.fps)
        }
    }

    clear(){
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.obstacles.filter((obstacle) => obstacle.y + obstacle.height )
    }

    draw(){
        this.background.draw()
        this.car.draw()
        this.obstacles.forEach(obstacle => obstacle.draw())
    }

    move(){
        this.background.move()
        this.car.move()
        this.obstacles.forEach(obstacle => obstacle.move())
    }

    onKeyEvent(event) {
        this.car.onKeyEvent(event)
      }

    addObstacles() {
        const minSpace = this.ctx.canvas.width - this.car.width * 2;

        const obstacleWidth = Math.floor(Math.random() * minSpace);

        const positionX = Math.floor(Math.random() * (this.ctx.canvas.width - obstacleWidth));

        this.obstacles.push(
            new Obstacle(this.ctx, positionX, 0, obstacleWidth, this.obstacleSpeed)
        )
    }

    checkCollisions() {
        if (this.obstacles.some(obstacle => this.car.collidesWith(obstacle)))
    }

}