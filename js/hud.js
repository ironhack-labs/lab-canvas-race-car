class HUD {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = document.querySelector("canvas").getContext("2d");
    }

    drawHUD() {
        this.ctx.drawImage(
            this.img,
            0,
            0,
            this.ctx.canvas.width,
            this.ctx.canvas.height
        );
    }
}
