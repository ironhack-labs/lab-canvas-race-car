class Car {
    constructor(ctx) {
        this.ctx = ctx;

        this.img = new Image();
        this.img.src = '/images/car.png',
        this.img.onload = () => {
            this.draw()
        }
    }

    draw() {
        this.ctx.drawImage(
            this.img,
            225,
            575,
            50,
            100,
        )
    }
}