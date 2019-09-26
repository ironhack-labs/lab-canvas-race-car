class Game {
    constructor(ctx){
        this.ctx = ctx;
        this.intervalId = null;

        this.board = new Board(this.ctx)
    }

    //clean draw move
    run() {
        this.intervalId = setInterval(() => {
            this._clear()
            this._draw()
            this._move()
        }, 1000 / 60)
     }

    _clear(){
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
    }
    
    _draw(){
        this.board.draw();
    }

    _move(){
        this.board.move();
    }


}