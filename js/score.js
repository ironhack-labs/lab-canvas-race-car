class Score {
    constructor(ctx) {
        this._ctx = ctx;
        this._count = 0
    }

    draw(count) {
        this._count = count
        this._ctx.font = "bold 30px sans-serif";
        this._ctx.fillStyle = 'Red'
        this._ctx.fillText (`Score: ${this._count}`, this._ctx.canvas.width * 0.65 ,this._ctx.canvas.height * 0.08)
    }

    scoreFinal() {
        this._ctx.fillStyle = 'black'
        this._ctx.fillRect (0, 0, this._ctx.canvas.width, this._ctx.canvas.height)
        this._ctx.font = "bold 45px sans-serif";
        this._ctx.fillStyle = 'Yellow'
        this._ctx.textAlign = "center";
        this._ctx.fillText ('Game Over!!', this._ctx.canvas.width * 0.5 ,this._ctx.canvas.height * 0.5)
        this._ctx.font = "bold 35px sans-serif";
        this._ctx.fillStyle = 'White'
        this._ctx.fillText (`Score final: ${this._count}`, this._ctx.canvas.width * 0.5 ,this._ctx.canvas.height * 0.55)
    }





}