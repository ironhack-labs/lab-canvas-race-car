class Car {
      constructor(ctx, canvasSize, imgCar) {
            //Se establencen los valores conocidos: las dimensiones y la velocidad
            this.width = 40
            this.height = 80
            this.speed = 5

            //Información del canvas
            this.ctx = ctx
            this.canvasSize = {
                  width: canvasSize.width,
                  height: canvasSize.height
            }

            //La posición inicial siempre será la misma por eso no se pasa como parametros
            this.posX = this.canvasSize.width / 2 - this.width / 2
            this.posY = this.canvasSize.height - this.height - 20
            //Inicialización de la imagen
            this.car = undefined
            this.init(imgCar)

      }
      //Carga la imagen del coche
      init(imgCar) {
            this.car = new Image()
            this.car.src = `images/${imgCar}`
            this.car.onload = () => this.draw()
      }

      update() {
            this.draw()
      }

      draw() {
            this.ctx.drawImage(this.car, this.posX, this.posY, this.width, this.height)
      }
      //Movimiento del coche
      move(direction) {
            direction === 'left' && this.posX - this.speed >= 40 ? this.posX -= this.speed : null
            direction === 'right' && this.posX + this.width + this.speed < this.canvasSize.width - 40 ? this.posX += this.speed : null
      }

}

