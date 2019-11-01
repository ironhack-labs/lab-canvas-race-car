class Obstacle {
    constructor(game) {
        this.obstacleHeight = 30;
        this.obstacleWidth = this.createRandomobstacleWidth();
        this.borderWidth = 50;
        this.horizontalStartPoint = this.createRandomhorizontalStartPoint();
        this.verticalStartPoint = 0;
        this.game = game;
    }

    paintObstacle() {
        context.beginPath();
        context.fillStyle = 'darkred';
        context.fillRect(this.horizontalStartPoint, this.verticalStartPoint, this.obstacleWidth, this.obstacleHeight);
        context.closePath();
    }

    createRandomhorizontalStartPoint() {
        let mostRightStartPoint = 400 - this.borderWidth - this.obstacleWidth;
        let startPointWidth = mostRightStartPoint - this.borderWidth;
        return this.horizontalStartPoint = Math.floor(Math.random() * startPointWidth) + this.borderWidth
    }

    createRandomobstacleWidth() {
        let maximumObstacleWidth = 200;
        let minimumObstacleWidth = 50;
        return this.obstacleWidth = Math.floor(Math.random() * (maximumObstacleWidth - minimumObstacleWidth)) + minimumObstacleWidth
    }

    moveObstacle() {
        this.verticalStartPoint += 1;
        this.paintObstacle(this.horizontalStartPoint, this.verticalStartPoint);
        // window.requestAnimationFrame(this.moveObstacle);
    }
}

console.log("I am connected")