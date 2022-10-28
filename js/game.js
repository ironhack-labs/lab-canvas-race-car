const game = {


    FPS: 60,
    canvas: undefined,
    ctx: undefined,
    width: 500,
    height: 700,

    player: undefined,
    background: undefined,

    intervalidId: undefined,


    init() {
        this.canvas = document.querySelector("#canvas")
        this.ctx = this.canvas.getContext("2d")
        this.start()
    },

    start() {
        this.generateAll()
        this.intervalidId = setInterval(() => {
            this.background.draw()
            this.player.draw()
        }, 1000 / this.FPS)
    },

    generateAll() {
        this.player = new Player(this.ctx, this.width, this.height)
        this.background = new Background(this.ctx, this.width, this.height)

    },

    clearAll() {
        this.ctx.clearRect(0, 0, this.width, this.height)
    },
}
