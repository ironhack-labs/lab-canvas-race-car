class Car {
    constructor(ctx, x, y) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;

        this.width = 45;
        this.height = 95;

        this.img = new Image()
        this.img.src = './images/car.png'
        this.img.onload = () => {
            this.draw()
        }
    }
    draw() {
        this.ctx.drawImage(
            this.img,
            this.ctx.canvas.width / 2 - this.width / 2,
            this.ctx.canvas.height - this.height - 10,
            this.width,
            this.height
        )
    }
}