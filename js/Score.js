const score = {
    init(ctx, posX, posY, textSize, canvasSize) {
        this.ctx = ctx;
        this.scorePos = { x: posX, y: posY };
        this.textSize = textSize;
        this.canvasSize = canvasSize;
        this.score = 0;
    },
    updateScore() {
        this.score++;
    },
    draw() {
        this.ctx.fillStyle = "black";
        this.ctx.font = "30px Arial";
        this.ctx.fillText(`SCORE: ${this.score}`, 10, 50);
    },
    getSocre() {

    }

}