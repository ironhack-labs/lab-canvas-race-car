class Obstacles {
    constructor(canvas, x) {
        this.canvas = canvas;
        this.positionX = positionX;
        this.positionY = positionY;
        this.rectWidth = Math.random() * canvas.with * 0.4; 
        this.rectHeight = 30;
        this.ctx = this.canvas.getContext("2d");
    }
    draw() {
        this.ctx.filStyle = "red";
        this.ctx.fillRect= (this.positionX, this.positionY, this.rectWidth, this.rectHeight)  )
    }

}


