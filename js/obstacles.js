const obstacles = {

    canvasTag: undefined,
    canvas: document.getElementById('canvas'),
    canvasSize: {
        w: document.querySelector("#canvas.width"),
        h: document.querySelector("#canvas.height"),
    },
    ctx: canvas.getContext('2d'),



    drawObstacles() {

        const obj = []

        this.ctx.fillStyle = 'red';
        this.ctx.fillRect(0, 0, 300, 30)

    },


}
