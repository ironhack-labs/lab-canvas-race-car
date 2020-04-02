class Obstacle {
      constructor(ctx, canvasSize, roadWidth, carWidth, grassWidth) {
            //Información del canvas
            this.ctx = ctx
            this.canvasSize = {
                  width: canvasSize.width,
                  height: canvasSize.height
            }
            //Velocidad
            this.speed = 2

            this.height = 30
            //Se establece un ancho que sea superable por el vehiculo independientemente de la posicion horizontal
            this.width = Number(Math.random() * (roadWidth - carWidth * 2.1))

            this.posY = -this.height
            //Se calcula una posición x aleatoria
            this.posX = Number(Math.random() * (roadWidth - this.width)) + grassWidth

      }
      //Pinta y mueve los obstaculos
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