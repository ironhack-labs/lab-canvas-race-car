class Obstacle {
      constructor(ctx, canvasSize, roadWidth, carWidth, grassWidth) {
            this.ctx = ctx
            this.canvasSize = {
                  width: canvasSize.width,
                  height: canvasSize.height
            }

            this.speed = 1

            this.height = 30
            //Se establece un ancho que sea superable por el vehiculo independientemente de la posicion horizontal
            this.width = Number(Math.random() * (roadWidth - carWidth * 2.1))

            this.posY = -this.height
            //Se calcula una posición x aleatoria
            this.posX = Number(Math.random() * (roadWidth - this.width)) + grassWidth

      }

      update() {

            this.draw()
            this.move()
      }

      draw() {
            this.ctx.fillStyle = 'firebrick'
            this.ctx.fillRect(this.posX, this.posY, this.width, this.height)
      }

      move() {
            this.posY += this.speed
      }

}