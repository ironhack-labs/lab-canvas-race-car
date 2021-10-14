class Car {
    constructor(canvas) {
        this.img = new Image();
        this.url = "/images/car.png"
        this.img.src = this.url;
        this.scale = Math.PI * 0.1
        this.carWidth = 158 * this.scale;
        this.carHeight = 319 * this.scale;
        this.canvas = canvas;
        this.ctx = document.querySelector('canvas').getContext('2d');
    }

    drawCar() {
        this.ctx.drawImage(this.img, this.canvas.width / 2, (this.canvas.height / 3) * 2.3, this.carWidth, this.carHeight)

    }

}

