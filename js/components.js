const roadImg = new Image();
roadImg.src = "./images/road.png";
const carImg = new Image();
carImg.src = "./images/car.png";

const obstacles = [];

class Canvas {
    constructor(ctx) {
        this.ctx = ctx;
        this.width = 500;
        this.height = 700;

        this.maxLeft = 65.35;
        this.maxRight = 400.25;

        this.frames = 0;
        this.interval = 0;
    }

    start() {
        this.interval = setInterval(() => {
            this.updateGameArea();
        }, 50);
    }

    stop() {
        clearInterval(this.interval);
    }

    clearCanvas() {
        this.ctx.clearRect(0, 0, 500, 700);
    }

    drawRoad() {
        this.ctx.drawImage(roadImg, 0, 0, this.width, this.height);
    }

    drawCar() {
        this.ctx.drawImage(carImg, car.x, car.y, widthCar, heightCar);
    }

    drawObstacle(obstacle) {
        const {x, y, width, height} = obstacle;
        this.ctx.fillStyle = "red";
        this.ctx.fillRect(x, y, width, height);
    }

    updateObstacles() {
        gameBoard.frames += 1;
        if (gameBoard.frames % 180 === 0) {
            let x = Math.floor(Math.random() * (this.maxRight - this.maxLeft + 1) + this.maxLeft);
            let y = 0;
            let width = Math.floor(Math.random() * (this.maxRight - x + 1));
            const height = 20;
            obstacles.push(new Component(x, y, width, height));
        }

        for (let i = 0; i < obstacles.length; i++) {
            obstacles[i].updateObstacle();
            this.drawObstacle(obstacles[i]);
        }
    }

    checkGameOver() {
        const crashed = obstacles.some(function(obstacle) {
            return car.crashWith(obstacle);
        });
        return crashed;
    }

    score() {
        const points = Math.floor(this.frames / 100);
        this.ctx.font = "30px vernada";
        this.ctx.fillStyle = "yellow";
        this.ctx.fillText(`Score: ${points}`, 10, 30);
        return points;
    }

    updateGameArea() {
        this.clearCanvas();
        this.drawRoad();
        this.drawCar();
        this.updateObstacles();
        if(this.checkGameOver()) {
            gameBoard.stop(); 
            setTimeout(() => this.lose(), 50);
        }
        this.score();
    }

    lose() {
        this.ctx.font = "30px vernada";
        this.ctx.fillStyle = "black";
        this.ctx.fillText("You Lost :(", 180, 350);
    }
}


class Component {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.speedX = 0;
        this.speedY = 0;
    }

    moveCar(dir) {
        this.speedX = 5;
        switch (dir) {
            case "ArrowLeft":
                if (this.x <= gameBoard.maxLeft) {
                    return;
                }
                this.x -= this.speedX;
                break;
            case "ArrowRight":
                if (this.x >= gameBoard.maxRight) {
                    return;
                }
                this.x += this.speedX;
                break;
        }
    }

    updateObstacle() {
        if (this.y < gameBoard.height) {
            this.y++;
        }    
    }

    left() {
        return this.x;
    }

    right() {
        return this.x + this.width;
    }

    top() {
        return this.y;
    }

    bottom() {
        return this.y + this.height;
    }

    crashWith(obstacle) {
        return !(this.bottom() < obstacle.top() || this.top() > obstacle.bottom() || this.right() < obstacle.left() || this.left() > obstacle.right());
    }
}