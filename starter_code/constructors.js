class Rectangles {
    constructor(x, y, w, h, color, speed, initialPos, finalPos, carImg) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.initialPos = initialPos;
        this.finalPos = finalPos;
        this.dashInterval = [30, 15];
        this.color = color;
        this.speed = speed;
        this.lineWidth = 5;
        this.carImg = carImg;
    }

    moveDown() {
        this.y += this.speed;
    }

    drawRectangle() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.w, this.h);
        ctx.closePath();
    }

    drawLines() {
        ctx.beginPath();
        ctx.lineWidth = this.lineWidth;
        ctx.setLineDash(this.dashInterval);//[30, 15]);
        ctx.moveTo(this.initialPos[0], this.initialPas[1]); //w / adj / 2, -h + counter - 5000);
        ctx.lineTo(this.finalPos[0], this.finalPos[1]);//w / adj / 2, h + counter);
        ctx.strokeStyle = this.color;
        ctx.stroke();
    }

    drawCar() {
        ctx.drawImage(this.carImg, this.x, this.y, 80, 160)
        carImg.onload = function () {
            ctx.beginPath();
            ctx.fillStyle = this.color;
            ctx.closePath();
        }
    } 
}