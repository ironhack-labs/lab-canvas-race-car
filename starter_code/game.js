class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.width = '550px';
        this.height = '750px';
    }

    startGame() {
        this.canvas.setAttribute('width', this.width);
        this.canvas.setAttribute('height', this.height);
        
        this.intervalId = setInterval(() => {
            console.log("TEST");
            // this.clearCanvas();
            this.drawBackground();
            // this.drawCar();
            // this.moveCar();
            // this.drawObstacles();
            // this.obstaclesCol();
        }, 500);
    }

    drawBackground() {
        this.ctx.fillStyle = 'rgb(0, 170, 0)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = 'rgb(60, 60, 60)';
        this.ctx.fillRect(50, 0, this.canvas.width - 100, this.canvas.height);
        this.ctx.fillStyle = 'rgb(240, 240, 240)';
        this.ctx.fillRect(70, 0, 20, this.canvas.height);
        this.ctx.fillStyle = 'rgb(240, 240, 240)';
        this.ctx.fillRect(460, 0, 20, this.canvas.height);
        this.ctx.beginPath();
        
        this.ctx.setLineDash([60, 40]);
        this.ctx.strokeStyle = 'white';
        this.ctx.lineWidth = '20';
        this.ctx.moveTo(this.canvas.width / 2, 0);
        this.ctx.lineTo(this.canvas.width / 2, 800);
        this.ctx.stroke();
    }

    drawCar() {
        
    }

    drawObstacles() {

    }
}

