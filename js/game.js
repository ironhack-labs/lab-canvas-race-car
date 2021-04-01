const carsGame = {
    name: "HTML5 Canvas application",
    description: "A game with a car and some random obstacles",
    author: "Natalia Canales",
    license: undefined,
    version: "1.0.0",
    canvasDom: undefined,
    ctx: undefined,
    canvasSize: { w: undefined, h: undefined },
    car: undefined,
    frames: 0,
    score: 0,
    obstacles: [],

    init() {
        this.canvasDom = document.querySelector("#canvas");
        this.ctx = this.canvasDom.getContext("2d");
        this.setCanvasSize();
        this.createCar();
        this.drawAll();
        this.setListeners();
    },

    setCanvasSize() {
        this.canvasSize = {
            w: window.innerWidth / 2,
            h: window.innerHeight
        };
        this.canvasDom.setAttribute("width", this.canvasSize.w);
        this.canvasDom.setAttribute("height", this.canvasSize.h);
    },

    createRoad() {
        this.ctx.fillStyle = "green";
        this.ctx.fillRect(this.canvasSize.w / 2 - 175, this.canvasSize.h / 2 - 300, 350, 500);
        this.ctx.fillStyle = "grey";
        this.ctx.fillRect(this.canvasSize.w / 2 - 135, this.canvasSize.h / 2 - 300, 270, 500);
    },

    createLines() {
        this.ctx.beginPath();
        this.ctx.strokeStyle = "white";
        this.ctx.lineWidth = 7;
        this.ctx.moveTo(this.canvasSize.w / 2 - 120, this.canvasSize.h / 2 - 300);
        this.ctx.lineTo(this.canvasSize.w / 2 - 120, this.canvasSize.h / 2 + 200);
        this.ctx.stroke();
        this.ctx.closePath();


        this.ctx.beginPath();
        this.ctx.strokeStyle = "white";
        this.ctx.lineWidth = 7;
        this.ctx.moveTo(this.canvasSize.w / 2 + 120, this.canvasSize.h / 2 - 300);
        this.ctx.lineTo(this.canvasSize.w / 2 + 120, this.canvasSize.h / 2 + 200);
        this.ctx.stroke();
        this.ctx.closePath();
    },

    createDashLine() {
        // https://stackoverflow.com/a/25790625
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.strokeStyle = "white";
        this.ctx.lineWidth = 7;
        this.ctx.setLineDash([40, 25]);
        this.ctx.moveTo(this.canvasSize.w / 2, this.canvasSize.h / 2 - 300);
        this.ctx.lineTo(this.canvasSize.w / 2, this.canvasSize.h / 2 + 200);
        this.ctx.stroke();
        this.ctx.closePath();
        this.ctx.restore();
    },

    createScoreText() {
        this.ctx.font = "20px Arial";
        this.ctx.fillStyle = "white";
        this.ctx.fillText(`Score: ${this.score}`, this.canvasSize.w / 2 - 110, this.canvasSize.h / 2 - 280);
    },

    createCar() {
        this.car = new Car(this.ctx);
    },

    drawAll() {
        this.intervalID = setInterval(() => {
            this.clearScreen();
            this.createRoad();
            this.createLines();
            this.createDashLine();
            this.createScoreText()
            this.car.draw();
            this.frames++;
            this.frames % 20 === 0 ? this.score += 5 : null;
            this.frames % 40 === 0 ? this.obstacles.push(new Obstacle(this.ctx)) : null;
            for (let i = 0; i < this.obstacles.length; i++) {
                let elem = this.obstacles[i];
                elem.position.y += 5;
                elem.draw();

                if (elem.position.x < this.car.carPosition.x + this.car.carSize.w &&
                    elem.position.x + elem.obstacleSize.w > this.car.carPosition.x &&
                    elem.position.y < this.car.carPosition.y + this.car.carSize.h &&
                    elem.obstacleSize.h + elem.position.y > this.car.carPosition.y) {
                    clearInterval(this.intervalID);
                    alert(`Game Over!! Your final score is: ${this.score}`);
                }

                if (elem.position.y >= this.canvasSize.h / 2 + 200) {
                    this.obstacles.splice(i, 1);
                }
            }

        }, 50);
    },

    clearScreen() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h);
    },

    setListeners() {
        document.onkeyup = e => {
            e.key === 'ArrowLeft' ? this.car.moveLeft() : null
            e.key === 'ArrowRight' ? this.car.moveRight() : null
        }
    },

}

class Car {
    constructor(ctx) {
        this.ctx = ctx;
        this.init();
        this.carPosition = { x: 315, y: 460 };
        this.carSize = { w: 50, h: 80 };
    }

    init() {
        this.imgInst = new Image();
        this.imgInst.src = "images/car.png";
    }

    draw() {
        this.ctx.drawImage(
            this.imgInst,
            this.carPosition.x,
            this.carPosition.y,
            this.carSize.w,
            this.carSize.h);
    }

    moveLeft() {
        if (this.carPosition.x >= 230) {
            this.carPosition.x -= 15;
        }
    }

    moveRight() {
        if (this.carPosition.x <= 400) {
            this.carPosition.x += 15;
        }
    }
}

class Obstacle {
    constructor(ctx) {
        this.ctx = ctx;
        if (Math.random() < 0.5) {
            this.side = "L";
            this.position = { x: 225, y: 58 };
        } else {
            this.side = "R";
            this.position = { x: 455, y: 58 };
        }
        // https://stackoverflow.com/a/1527820
        this.obstacleSize = {
            w: Math.floor(Math.random() * (150 - 50) + 50),
            h: 20
        };
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.strokeStyle = "red";
        this.ctx.lineWidth = this.obstacleSize.h;
        this.ctx.moveTo(this.position.x, this.position.y);
        if (this.side === "L") {
            this.ctx.lineTo(this.position.x + this.obstacleSize.w, this.position.y);
        } else {
            this.ctx.lineTo(this.position.x - this.obstacleSize.w, this.position.y);
        }
        this.ctx.stroke();
        this.ctx.closePath();
    }
}