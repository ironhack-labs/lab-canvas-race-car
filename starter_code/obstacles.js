class obstacles {

    constructor() {
        this._posX = Math.random() * (200 - 30) + 30,
            this._posY = 0,
            this._width = Math.random() * (100 - 50) + 50,
            this._height = 20,
            this._vel = 5,
            this._obstacles = undefined
    }

    DrawObstacles() {
        game.ctx.fillStyle = "#892618"
        game.ctx.fillRect(this._posX, this._posY, this._width, this._height)

    };

    move() {
        this._posY += this._vel
        game.ctx.fillRect(this._posX, this._posY, this._width, this._height)
    }

}