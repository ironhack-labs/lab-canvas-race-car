class Car {
    constructor(ctx, x, y) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;

        this.width = 52;
        this.heigth = 104;

        this.img = new Image();
        this.img.src = '/images/car.png';
        this.img.onload = () => {
            this.draw();
        }
    }

    draw() {
        this.ctx.drawImage(
            this.img,
            this.x,
            this.y,
            this.width,
            this.heigth
        )
    }
}