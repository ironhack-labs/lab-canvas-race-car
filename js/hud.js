class HUD {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = document.querySelector("canvas").getContext("2d");
        this.score = 0;
        this.scoreTimer = setInterval(() => {
            this.score++;
        }, 50);
    }

    drawHUD() {
        this.ctx.font = "30px Arial";
        this.ctx.fillStyle = "white";
        this.ctx.textAlign = "center";
        this.ctx.fillText(
            this.score,
            this.canvas.width * 0.5,
            this.canvas.height * 0.98
        );
    }
    drawGameOver() {
        this.ctx.font = "30px Arial";
        this.ctx.fillStyle = "white";
        this.ctx.textAlign = "center";
        this.ctx.fillText(
            "Game Over",
            this.canvas.width * 0.5,
            this.canvas.height * 0.5
        );
    }
}
