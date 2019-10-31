/** @type HTMLCanvasElement */
let canvas = document.getElementById("canvas");

/** @type CanvasRenderingContext2D */
let ctx = canvas.getContext("2d");

let w = 500;
let h = window.innerHeight;
let counter = 1;
  let speedOfLine = 5;

function setCanvasDimensions() {
    canvas.setAttribute("height", h);
    canvas.setAttribute("width", w);
}
setCanvasDimensions();

class road {
    constructor(width, height, color, x, y) {
        this.width = width;
        this.height = height;
        this.color = color;
        this.x = x;
        this.y = y;
    }
    drawRect() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.rect(this.x, this.y, this.width, this.height)
        ctx.fill();
        ctx.closePath();

    }
}

function createRoad() {
    let grass = new road(w, h, "green", 0, 0).drawRect();
    let asphalt = new road(w - 60, h, "grey", 30, 0).drawRect();
    let sideLine = new road(w - 90, h, "white", 45, 0).drawRect();
    let lane = new road(w - 120, h, "grey", 60, 0).drawRect();

    ctx.beginPath();
    ctx.strokeStyle = "white";
    ctx.setLineDash([40, 20])
    ctx.moveTo(w / 2, (h + counter * speedOfLine))
    ctx.lineTo(w / 2, 0);
    ctx.lineWidth = 10;
    ctx.stroke();
    ctx.closePath();
}

