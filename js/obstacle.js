class Obstacle extends Car {
    constructor(canvas) {
        super(canvas);
        // this.posX = canvas.clientWidth * 0.5;
        this.url = "/images/carObstacle.png";
        this.img.src = this.url;
        this.posX = this.randomRange(canvas.clientWidth*0.1, canvas.clientWidth*0.8);
        this.posY = -this.carHeight;
        this.direction = 1;
        this.speed = 7;
    }
    
    randomRange(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    drawCar() {
        //this.ctx.filter = "invert(1)";
        this.ctx.save();
        this.ctx.translate(this.posX, this.posY);
        this.ctx.rotate(Math.PI);
        this.ctx.translate(-this.posX, -this.posY);
        this.ctx.drawImage(
            this.img,
            this.posX - this.carWidth / 2,
            this.posY - this.carHeight / 2,
            this.carWidth,
            this.carHeight
        );
        this.ctx.restore();
        //this.ctx.filter = "invert(0)";
    }

    updateCarPos() {
            this.posY += this.direction * this.speed;
    }

    checkBoundaries() {
        if (this.posY > canvas.clientHeight)
            return true;
    }
}
