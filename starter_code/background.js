    const background = {
        posX: 150,
        posY: -100,

        drawRoad() {

            game.ctx.fillStyle = "#808080"
            game.ctx.fillRect(0, 0, game.wSize.width, game.wSize.height)
        },

        drawGreen() {
            game.ctx.lineWidth = 20
            game.ctx.strokeStyle = "#3b8200"
            game.ctx.strokeRect(0, 0, 20, game.wSize.height)

            game.ctx.lineWidth = 20
            game.ctx.strokeStyle = "#3b8200"
            game.ctx.strokeRect(280, 0, 20, game.wSize.height)
        },

        drawLine() {
            game.ctx.lineWidth = 8
            game.ctx.strokeStyle = "white"
            game.ctx.beginPath()
            game.ctx.moveTo(40, 0)
            game.ctx.lineTo(40, 600)
            game.ctx.stroke()

            game.ctx.lineWidth = 8
            game.ctx.strokeStyle = "white"
            game.ctx.beginPath()
            game.ctx.moveTo(260, 0)
            game.ctx.lineTo(260, 600)
            game.ctx.stroke()


        },

        drawDashline() {
            game.ctx.lineWidth = 8
            game.ctx.strokeStyle = "white"
            game.ctx.setLineDash([20, 10])
            game.ctx.beginPath()
            game.ctx.moveTo(this.posX, this.posY)
            game.ctx.lineTo(150, 800)
            game.ctx.stroke()
            game.ctx.setLineDash([0])

        },

        moveLine() {
            console.log("N")
            this.posY <= 0 ? this.posY += 20 : this.posY = -100


        }

    }