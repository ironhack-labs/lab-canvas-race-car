class Background {
    constructor(ctx){
        this.ctx = ctx;

        this.y = 0;
        this.vy = 7;

        this.width = ctx.canvas.width;
        this.height = ctx.canvas.height;

        this.img = new Image()
        this.img.src = 'images/road.png';
        this.img.isReady = false
        this.img.onload = () => {
            this.img.isReady = true
        }
    }

    isReady() {
        return this.img.isReady
    }

    draw() {
        if(this.isReady()){
            this.ctx.drawImage(this.img, 0, this.y, this.width, this.height);
            this.ctx.drawImage(this.img, 0, this.y - this.height, this.width, this.height)
        }
    }

    move() {
        this.y += this.vy;

        if(this.y >= this.height){
            this.y = 0;
        }
    }
}