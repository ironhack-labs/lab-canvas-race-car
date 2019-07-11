let Game = {
    canvas: undefined,
    ctx: undefined,
    fps: 60,
    obstacles: [],
    framesCounter: 0,
    player: undefined,

    init: function (id) {
        this.canvas = document.getElementById(id)
        this.ctx = this.canvas.getContext("2d")
        this.canvas.width = window.innerWidth / 2
        this.canvas.height = window.innerHeight / 2
        this.start()
        this.player = new Player(this.ctx)

    },


    start: function () {
        this.interval = setInterval(() => {
            this.drawBack()
            this.drawRoad()
            this.drawRoadLine()
            this.drawRoadLine2()
            this.drawRoadLineDash()
            this.player.showCar()
            this.player.moveCar()
        }, 1000 / this.fps)
    },

    drawBack: function () {
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(0, 0, this.canvas.width - 100, this.canvas.height)  // x y w h
    },

    drawRoad: function () {
        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(50, 0, this.canvas.width - 200, this.canvas.height)  // x y w h
    },

    drawRoadLine: function () {
        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(80, 0, 15, this.canvas.height)  // x y w h
    },

    drawRoadLine2: function () {
        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(527, 0, 15, this.canvas.height)  // x y w h
    },

    drawRoadLineDash: function () {
        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 15
        this.ctx.setLineDash([35, 25])
        this.ctx.beginPath()
        this.ctx.moveTo(310, 800)    // x y
        this.ctx.lineTo(310, 0)
        this.ctx.stroke()
    }




}