class Player {
    constructor(ctx) {
        this.ctx = ctx
        this.x = 225
        this.y = 550
        this.w = 60
        this.h = 100

        this.vx = 0
        
        this.img = new Image()
        this.img.src = 'images/car.png'
    }

    draw() { 
        this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    }

    move() {
        this.x += this.vx

        if (this.x + this.w >= this.ctx.canvas.width) {
            this.x = this.ctx.canvas.width - this.w
            this.vx = 0
        }

        if (this.x - this.w <= 0) {
            this.x = this.w
            this.vx = 0
        }
        
    }
}

