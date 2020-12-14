class Car {
    constructor(ctx) {
        this.ctx = ctx

        this.x = this.ctx.canvas.width / 3;
        this.y = this.ctx.canvas.height / 2;

        this.width = 180;
        this.height = 10;

        this.vx = 0;
        this.maxLeft = 50;
        this.maxRight = this.ctx.canvas.width - this.width - 15;

        this.img = new Image()
        this.img.src = 'images/car.png'
        this.img.isReady = false
        this.img.onload = () => {
            this.img.isReady = true
        }
    }

    isReady() {
        return this.img.isReady
    }

    draw() {
        if (this.isReady()) {
            this.ctx.drawImage(
                this.img,
                this.x,
                this.y
            )
        }
    }

    move() {
        this.x += this.vx
        if (this.x <= 30) {
            this.x = this.maxLeft
        } else if (this.x >= this.ctx.canvas.width - this.width) {
            this.x = this.maxRight
        }
    }

}