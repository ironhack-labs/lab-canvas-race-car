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
        this.newCanvas();

        //set interval 
        setInterval(() => {
            this.board.drawBoard(this.ctx);

            // console.log()

            // this.car.carImg.onload = () => {
            // }
            this.ctx.drawImage(this.car.carImg, this.car.x, this.car.y, this.car.w, this.car.h);


        }, 1000 / 60);

        // display board
    }

    gameOver() { }
}




class Board {
    drawBoard(ctx) {
        ctx.fillStyle = "#008100"
        ctx.fillRect(0, 0, 30, 600);
        ctx.fillRect(330, 0, 30, 600);
        ctx.fillStyle = "#ffffff"
        ctx.fillRect(40, 0, 10, 600);
        ctx.fillRect(310, 0, 10, 600);
        ctx.beginPath();
        ctx.moveTo(180, 0);
        ctx.lineTo(180, 600);
        ctx.strokeStyle = "#ffffff"
        ctx.setLineDash([40, 20]);
        ctx.lineWidth = 6;
        ctx.stroke();
        ctx.closePath();
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