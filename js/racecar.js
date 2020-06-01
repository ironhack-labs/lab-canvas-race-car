const RIGHT_KEY = 39
const LEFT_KEY = 37

class Car {
    constructor(ctx) {
        this.ctx = ctx
        this.x = this.ctx.canvas.width * 0.45
        this.y = this.ctx.canvas.height * 0.8
        this.w = 50
        this.h = 100
        this.vx = 0
        this.ax = 0
        this.img = new Image ()
        this.img.src = "./images/car.png"
    }
    draw () {
        this.ctx.drawImage (
            this.img, 
            this.x, 
            this.y,
            this.w,
            this.h,
            )
    }

    move () {
        document.addEventListener('keydown', e => {
            if (e.keyCode === LEFT_KEY){
                this.ax = -3
            } else if (e.keyCode === RIGHT_KEY) {
                this.ax = 3
            }
        })
        document.addEventListener('keyup', e => {
            if (e.keyCode === LEFT_KEY) {
                this.ax = 0
            } else if (e.keyCode === RIGHT_KEY) {
                this.ax = 0
            }
        })
        this.x += this.ax

        if (this.x <= (this.ctx.canvas.width * 0.10)) {
            this.x = this.ctx.canvas.width * 0.10;
        } else if (this.x >= (this.ctx.canvas.width * 0.80)) {
            this.x = this.ctx.canvas.width * 0.80;
        }

        
    }
    
}
