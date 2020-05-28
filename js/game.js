

class Game {
    constructor(canvasElement) {
        this.canvas = canvasElement
        this.ctx = this.canvas.getContext('2d')
        this._intervalId = null
        this._bg = new Road(this.ctx)
        // this._bg.draw()
        this._car = new Car(this.ctx)
        // this._car.draw()
    }

    start() {
        this._intervalId = setInterval(() => {
            this._clear()
            this._draw()
            this._move()
            this._moveKeys()
        }, 1000 / 60 )
    }

    _clear() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
    }

   _draw() {
        this._bg.draw()
        this._car.draw()
    }

    _move() {
        // this._bg.move()
        this._car.move()
    }
    
    _moveKeys() {
        document.addEventListener('keydown', (e) => {
            switch (e.keyCode) {
                case KEY_RIGHT:
                    this._car.vx = 0
                    this._car.vx += this._car.ax;
                    break;
                case KEY_LEFT:
                    this._car.vx = 0
                    this._car.vx += -this._car.ax;
                    break;
            }
        })

        document.addEventListener('keyup', (e) =>{
            switch (e.keyCode) {
                case KEY_RIGHT:
                    this._car.vx = 0;
                    break;
                case KEY_LEFT:
                    this._car.vx = 0;
                    break;
            } 
        })

        
    }
}