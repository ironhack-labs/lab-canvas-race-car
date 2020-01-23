// CARRETERA
const background = {
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

        // LINEA INTERMEDIA
        game.ctx.lineWidth = 5
        game.ctx.setLineDash([30, 20])
        game.ctx.moveTo(game.wSize.width / 2, 0)
        game.ctx.lineTo(game.wSize.width / 2, game.wSize.height)
        game.ctx.stroke()

    }
}