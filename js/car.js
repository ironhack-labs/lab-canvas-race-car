class Car {
    constructor(ctx) {
        this._ctx = ctx
    
        this._img = new Image()
        this._img.src = './images/car.png'

        this.x = this._ctx.canvas.width * 0.45
        this.y = this._ctx.canvas.height * 0.85
        this.width = 50
        this.height = 100

        this.vx = 0
        this.vy = 0

    }


    draw() {
        this._ctx.drawImage(
            this._img,
            this.x,
            this.y,
            this.width,
            this.height
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