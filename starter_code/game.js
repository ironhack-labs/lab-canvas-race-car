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
        this.board.drawBoard(this.ctx);



        //set interval 

        // display board
    }

    gameOver() { }
}




class Board {
    constructor() {

    }

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