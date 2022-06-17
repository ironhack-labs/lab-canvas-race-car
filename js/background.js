class Background {
    constructor(ctx) {
        this.ctx = ctx;
        this.width = ctx.canvas.width;
        this.height = ctx.canvas.height;
        this.image = new Image();
        this.y = 0
        this.image.src = 'images/road.png';
    }
    
    draw() {
        this.ctx.drawImage(this.image, 0, this.y, this.width, this.height);
    }
}