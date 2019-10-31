class Game {
    constructor(car, board) {
        this.car = car;
        this.obstacles = [];
        this.board = board;
        this.canvas = document.createElement("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.score = 0;
        this.intervalID;
    }

    randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    newCanvas() {
        const board = document.querySelector('#game-board');
        this.canvas.setAttribute("width", "360px")
        this.canvas.setAttribute("height", "600px")

        board.appendChild(this.canvas);
    }

    start() {
        window.onkeydown = ((e) => {
            switch (e.key) {
                case "ArrowRight":

                    if (this.car.x < 270) {
                        this.car.x += 10;
                    }
                    break;
                case "ArrowLeft":
                    if (this.car.x > 50) {
                        this.car.x -= 10;
                    } break;
            }
        })

        this.newCanvas();

        let offset = 0;
        let obstaclesCounter = 0;

        //set interval 
        this.intervalID = setInterval(() => {
            this.ctx.clearRect(0, 0, 360, 600);
            offset++;
            this.score++;

            if (offset > 160) {
                offset = 0;
            }

            this.board.drawBoard(this.ctx, offset);
            // Draw the car 
            this.ctx.drawImage(this.car.carImg, this.car.x, this.car.y, this.car.w, this.car.h);

            if (obstaclesCounter > 200) {
                //draw the obstacles
                this.obstacles.push(new Obstacles(this.randomInt(0, 360), this.randomInt(50, 200)))
                obstaclesCounter = 0;
            }

            this.obstacles.forEach((obstacle) => {
                this.ctx.fillStyle = "#880000";
                this.ctx.fillRect(obstacle.x, obstacle.y += 2, obstacle.w, obstacle.h);
            })

            this.obstacles = this.obstacles.filter((obstacle) => obstacle.y < 630);

            this.obstacles.forEach((obstacle) => {
                this.gameOver(obstacle);
            })

            obstaclesCounter++;

        }, 1000 / 60);

    }

    gameOver(obstacle) {
        if (this.car.x + this.car.w > obstacle.x &&
            this.car.x < obstacle.x + obstacle.w &&
            this.car.y < obstacle.y + obstacle.h &&
            this.car.y + this.car.h > obstacle.y) {

            this.ctx.fillStyle = "#000";
            this.ctx.fillRect(0,0,360,600);
            this.ctx.fillStyle = "#ff0000";
            this.ctx.font = "25px Arial";
            this.ctx.fillText(`Game over`, 115, 280);

            this.ctx.fillStyle = "#fff";
            this.ctx.font = "15px Arial";
            this.ctx.fillText(`Score: ${Math.floor(this.score/10)}`, 30, 30);

            clearInterval(this.intervalID);
        }
    }
}

class Board {
    drawBoard(ctx, offsetFactor) {
        ctx.fillStyle = "#008100"
        ctx.fillRect(0, 0, 30, 600);
        ctx.fillRect(330, 0, 30, 600);
        ctx.fillStyle = "#ffffff"
        ctx.fillRect(40, 0, 10, 600);
        ctx.fillRect(310, 0, 10, 600);

        ctx.lineWidth = 6;
        ctx.strokeStyle = "#ffffff";
        ctx.setLineDash([40, 40]);
        ctx.lineDashOffset = -offsetFactor;
        ctx.strokeRect(-10, -10, 190, 620);
    }
}

class Car {
    constructor(x) {
        this.x = x;
        this.y = 480;
        this.w = 40;
        this.h = 80;
        this.carImg = new Image();
        this.carImg.src = "./images/car.png"
    }
}

class Obstacles {
    constructor(x, w) {
        this.x = x;
        this.y = 0;
        this.w = w;
        this.h = 20;
    }
}
