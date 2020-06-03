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

    move() {
        document.addEventListener('keydown', event => {
            switch(event.keyCode) {
                case RIGHT_BUTTON:
                    this.vx += 0.01;
                    break;
                case LEFT_BUTTON:
                    this.vx += -0.01;
                    break;
            }
        })

        document.addEventListener('keyup', event => {
            switch(event.keyCode) {
                case RIGHT_BUTTON:
                    this.vx = 0;
                    break;
                case LEFT_BUTTON:
                    this.vx = 0;
                    break;
            }
        })

        this.x += this.vx
        this._checkCollision()
    }


    _checkCollision() {
        if (this.x >= this._ctx.canvas.width * 0.80) {
            this.x = this._ctx.canvas.width * 0.80
        } else if (this.x <= this._ctx.canvas.width * 0.10) {
            this.x = this._ctx.canvas.width * 0.10
        }
    }


} 