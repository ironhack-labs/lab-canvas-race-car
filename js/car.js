class Car {
    constructor(canvas) {
        this.img = new Image();
        this.url = "/images/car.png"
        this.img.src = this.url;
        this.scale = Math.PI * 0.1
        this.carWidth = 158 * this.scale;
        this.carHeight = 319 * this.scale;
        this.canvas = canvas;
        this.ctx = document.querySelector("canvas").getContext("2d");
        this.direction = 0;
        this.speed = 5;
    }

    drawCar() {
        this.ctx.drawImage(this.img, this.canvas.width / 2, (this.canvas.height / 3) * 2.3, this.carWidth, this.carHeight)

    }

    setDirection(direction) {
        this.direction = direction;
    }

    gibGummi(speed) {
        this.speed *= speed;
    }
}