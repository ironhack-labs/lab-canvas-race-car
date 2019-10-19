const arrowUp = 38;
const arrowDown = 40;
const arrowLeft = 37;
const arrowRight = 39;

class Car {
    constructor(ctx){
        this.ctx = ctx
        this.x = this.ctx.canvas.width * .45
        this.y = this.ctx.canvas.height - this.ctx.canvas.height * 0.25
        this.w = 50
        this.h = 100

        this.img = new Image()
        this.img.src = "./images/car.png";

        this.vx = 0
        this.vy = 0

        this._events = this._setEvents()
    }

    draw() {
        this.ctx.drawImage(
            this.img,
            this.x,
            this.y,
            this.w,
            this.h
        )
    }

    move() {
        this.x += this.vx
        this.y += this.vy

    }

    _setEvents(){

        document.onkeydown = (e) => {
            switch(e.keyCode){
                case arrowDown:
                    e.preventDefault()
                    this.vy = 2
                    break;
                case arrowUp:
                    e.preventDefault()
                    this.vy = -2
                    break;
                case arrowLeft:
                    e.preventDefault()
                    this.vx = -2
                    break;
                case arrowRight:
                    e.preventDefault()
                    this.vx = 2
                    break;
            }
        }
        document.onkeyup = (e) => {
            switch(e.keyCode){
                case arrowDown:
                    e.preventDefault()
                    this.vy = 0
                    break;
                case arrowUp:
                    e.preventDefault()
                    this.vy = 0
                    break;
                case arrowLeft:
                    e.preventDefault()
                    this.vx = 0
                    break;
                case arrowRight:
                    e.preventDefault()
                    this.vx = 0
                    break;
            }
        }
    }


}