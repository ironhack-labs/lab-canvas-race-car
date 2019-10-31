class Game {
    constructor(car, board) {
        this.car = car;
        this.obstacles = [];
        this.board = board;
        this.canvas = document.createElement("canvas");
        this.ctx = this.canvas.getContext("2d");

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

        //set interval 
        setInterval(() => {
            this.ctx.clearRect(0, 0, 360, 600)
            offset++;

            if (offset > 160) {
                offset = 0;
            }

            this.board.drawBoard(this.ctx, offset);
            // Draw the car 
            this.ctx.drawImage(this.car.carImg, this.car.x, this.car.y, this.car.w, this.car.h);

        }, 1000 / 60);

    }

    gameOver() { }
}




class Board {
    constructor() {
    }

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