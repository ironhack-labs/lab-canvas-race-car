
class Road {
    constructor(canvas) {
        this.img = new Image();
        this.url = "/images/road.png"
        this.img.src = this.url;
        this.canvas = canvas;
        this.ctx = document.querySelector('canvas').getContext('2d');
    }

    drawRoad() {
        this.ctx.drawImage(this.img, 0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
    }

}


