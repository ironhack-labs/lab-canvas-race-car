// CARRETERA
const background = {
    position: {
        x: game.wSize.width / 2,
        y: -5000
    },

    drawBrackground() {
        // CARRETERA GRIS
        game.ctx.fillStyle = '#808080'
        game.ctx.fillRect(30, 0, (game.wSize.width - 60), game.wSize.height)


        // LINEAS LATERALES
        game.ctx.setLineDash([0])
        game.ctx.lineWidth = 10
        game.ctx.strokeStyle = "#fff"
        game.ctx.beginPath()
        game.ctx.moveTo(45, 0)
        game.ctx.lineTo(45, game.wSize.height)
        game.ctx.stroke()

        game.ctx.moveTo(game.wSize.width - game.maple, 0)
        game.ctx.lineTo(game.wSize.width - game.maple, game.wSize.height)
        game.ctx.stroke()


    },
    drawDashLine() {
        // LINEA INTERMEDIA
        game.ctx.lineWidth = 5
        game.ctx.setLineDash([30, 20])
        game.ctx.moveTo(game.wSize.width / 2, this.position.y)
        game.ctx.lineTo(game.wSize.width / 2, game.wSize.height)
        game.ctx.stroke()
    },
    moveLine() {
        console.log("N")
        this.position.y <= 0 ? this.position.y += 10 : this.posY = -5000
    }
}