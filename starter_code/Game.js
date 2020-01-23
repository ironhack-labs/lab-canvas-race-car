// /** @type HTMLCanvasElement */
// const canvasDOMEl = document.getElementById("canvas");

// /** @type CanvasRenderingContext2D */
// const ctx = canvasDOMEl.getContext("2d");

// const w = window.innerWidth;
// const h = window.innerHeight;
// // eslint-disable-next-line no-unused-vars
// const w2 = w / 2;
// // eslint-disable-next-line no-unused-vars
// const h2 = h / 2;

// // canvasDOMEl.setAttribute('width') = 600;
// // canvasDOMEl.setAttribute('Height') = 500;
// canvasDOMEl.setAttribute('width') = 600;
// canvasDOMEl.setAttribute('Height') = 500;

class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.intervalId;
        this.offset = 0;


        // Car
        this.carX = 300;
        this.carY = 540;
        this.carWidth = 100;
        this.carHeigth = 150;

        this.obstacles = [];
        this.obsCounter = 0;
        this.movesObj = 0;
    }

    start() {
        this.canvas.setAttribute('width', 680);
        this.canvas.setAttribute('Height', 700);

        this.intervalId = setInterval(() => {
            this.drawBoard()
            this.drawCar()
            this.moveCar()

            this.obsCounter++;
            this.offset -= 3;

            if (this.obsCounter % 150 === 0) {
                this.obstacles.push(new Obstacle(this.movesObj))
                this.obsCounter = 0;
                console.log(this.obsCounter)

            }
            this.movesObj++;

            this.drawObstacles();

        }, 1000 / 60)
    }

    drawBoard() {
        //console.log("draw");
        this.ctx.beginPath()
        this.ctx.fillStyle = 'green';
        this.ctx.fillRect(0, 0, 680, 700);
        this.ctx.closePath()

        this.ctx.beginPath()
        this.ctx.fillStyle = 'grey';
        this.ctx.fillRect(90, 0, 500, 700);
        this.ctx.closePath()

        this.ctx.beginPath()
        this.ctx.fillStyle = 'white';
        this.ctx.fillRect(105, 0, 15, 700);
        this.ctx.closePath()

        this.ctx.beginPath()
        this.ctx.fillStyle = 'white';
        this.ctx.fillRect(560, 0, 15, 700);
        this.ctx.closePath()

        this.ctx.beginPath();
        this.ctx.lineWidth = 8;
        this.ctx.strokeStyle = 'white';
        this.ctx.setLineDash([20, 20]);
        this.ctx.moveTo(340, 0);
        this.ctx.lineTo(340, 700);
        this.ctx.lineDashOffset = this.offset;
        this.ctx.stroke();

    }

    drawCar() {

        let carImage = new Image();
        carImage.src = "./images/car.png";
        this.ctx.drawImage(carImage, this.carX, this.carY, this.carWidth, this.carHeigth);
    }

    moveCar() {
        window.onkeydown = (e) => {

            if (e.keyCode === 39 && this.carX <= 450) {
                this.carX += 20;
            }
            if (e.keyCode === 37 && this.carX >= 130) {
                this.carX -= 20;
            }
        }

    }

    drawObstacles() {
        this.obstacles.forEach(obstacle => {
            this.ctx.fillStyle = 'red';
            this.ctx.fillRect(obstacle.x, this.movesObj, obstacle.w, obstacle.h)
        })
    }
}

class Obstacle {
    constructor() {
        this.x = Math.floor(Math.random() * 50) + 1
        this.y = 0;
        this.w = 100;
        this.h = 20;
    }
}