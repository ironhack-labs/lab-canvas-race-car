class Score{
    constructor(ctx) {
        this.ctx = ctx
    }

    draw() {
        const points = Math.floor(this.frames / 5);
        this.ctx.font = '800 18px serif',
        this.ctx.fillStyle = 'white',
        this.ctx.textAlign = "left";
        this.ctx.fillText(
            `SCORE: ${points}`, this.ctx.canvas.width / 2 - 40 , 50
        )
    }

  
}