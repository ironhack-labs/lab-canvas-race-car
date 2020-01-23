const obstacles = {
    posX: Math.random() * (200 - 30) + 30,
    posY: 0,
    width: Math.random() * (100 - 50) + 50,
    height: 20,
    vel: 15,
    obstacles: undefined,

    DrawObstacles() {
        game.ctx.fillStyle = "#892618"
        game.ctx.fillRect(this.posX, this.posY, this.width, this.height)
    },

    move() {
     this.posY += this.vel
     game.ctx.fillRect(this.posX, this.posY, this.width, this.height)
    }

}