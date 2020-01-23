class obstacles {

    constructor() {
    this._posX = Math.random() * (200 - 30) + 30,
    this._posY = 0,
    this._width = Math.random() * (100 - 50) + 50,
    this._height = 20,
    this._vel = 15,
    this._obstacles = undefined}

    DrawObstacles() {
        game.ctx.fillStyle = "#892618"
        game.ctx.fillRect(this.posX, this.posY, this.width, this.height)
    };

    move() {
     this.posY += this.vel
     game.ctx.fillRect(this.posX, this.posY, this.width, this.height)
    }

}

