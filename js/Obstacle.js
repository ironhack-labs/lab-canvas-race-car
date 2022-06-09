class Obstacle {
    constructor(ctx, carHeigth, canvasSize) {
        this.ctx = ctx;
        this.obstaclePos = { x: undefined, y: 0 };
        this.obstacleSize = { w: undefined, h: 30 };
        this.canvasSize = canvasSize;
        this.boundary = 100;
        this.maxPlayableWidth = this.canvasSize.w - this.boundary * 2 - carHeigth * 0.5;
        this.smalestObstacle = 50;
        this.speed = 10;

        this.init();
    }

    init() {
        //create sizes for the obstacle.
        //tall is constant
        //width number between ->  canvas width - boundary - car | 20
        this.obstacleSize.w = this.getRandomArbitrary(this.smalestObstacle, this.maxPlayableWidth);

        //select the left side or the rigth sise
        if (this.getRandomArbitrary(0, 2)) {
            this.obstaclePos.x = 0 + this.boundary;
        } else {
            this.obstaclePos.x = this.canvasSize.w - this.obstacleSize.w - this.boundary;
        }

    }
    draw() {
        this.move();
        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(this.obstaclePos.x, this.obstaclePos.y, this.obstacleSize.w, this.obstacleSize.h);
    }
    getRandomArbitrary(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    move() {
        this.obstaclePos.y += this.speed;
    }
    checkForCollision(carPos, carSize) {
        console.log(carPos, carSize)
        if (carPos.x < this.obstaclePos.x + this.obstacleSize.w &&
            carPos.x + carSize.w > this.obstaclePos.x &&
            carPos.y < this.obstaclePos.y + this.obstacleSize.h &&
            carSize.h + carPos.y > this.obstaclePos.y) {
            // collision detected!
            return true;
        } else {
            return false;
        }

    }
}