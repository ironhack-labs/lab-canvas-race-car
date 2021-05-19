class Background {
    constructor(ctx) {
        this.ctx = ctx
        this.x = 0
        this.y=0


        this.width = this.ctx.canvas.width
        this.height = this.ctx.canvas.height
        //En el eje de las Y, por debajo del origen adquiere valores positivos
        //Queremos que la iamgen se desplace hacia abajo dando sensacion de que nos desplazamos hacia adelante
        this.vy = 2

        this.img = new Image()
        this.img.src = '../images/road.png'

        this.img.isReady = false
        this.img.onload = () => {
            this.img.isReady = true
        }
        //El movimiento se inicializa a false hasta que el usuario presione la tecla UP
        //para desplazarse
     //   this.movements = {
       //     up: false
        //}
    }

    isReady() {
        return this.img.isReady
    }

    draw() {
        if (this.isReady()) {
            this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
            //Cuando el valor de this.y sea el de la altura del canvas (parte baja)
            //road se pintara desde el alto menos la altura a la que se encuentre
            //De controlar la altura se encarga el metodo move()
            this.ctx.drawImage(this.img, this.x, this.y - this.height, this.width, this.height)
          
        }
    }

    move() {
        //this.y += this.vx
        //Llammamos al metodo movement y accedemos al value de su key, si es true ejecuta el if
        //if (this.movement.up) {
        this.y += this.vy
        if (this.y >= this.height) {
           this.y=0
        }
        //}
    }
    
}