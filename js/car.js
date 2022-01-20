class Car {
    constructor(ctx, posX, posY, width) {
        this.ctx = ctx
        this.carPos = { x: posX, y: posY }
        this.carSize = { w: width, h: width * 1.7 }
        this.imageInstance = undefined

        this.init()
    }

    init() {
        // inicializar el coche, con una instancia de imagen, y luego atribuirle una src
        this.imageInstance = new Image()
        this.imageInstance.src = 'images/car.png'
    }

    draw() {
        // dibujar el coche
        this.ctx.drawImage(this.imageInstance, this.carPos.x, this.carPos.y, this.carSize.w, this.carSize.h)
    }

    moveRight() {
        // mover el coche derecha
        if (this.carPos.x < 430) {
            this.carPos.x += 20
        }
    }

    moveLeft() {
        // mover el coche izquierda
        if (this.carPos.x > 10) {
            this.carPos.x -= 20
        }
    }

    checkBorderCollision() {
        // comprobar si toca el borde del canvas
    }

}