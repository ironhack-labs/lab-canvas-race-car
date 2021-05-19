class Car {
    constructor(ctx, x, y) {
        this.ctx = ctx
        this.x = 150
        //y viene fijada en game.js
        this.y = 300
        this.vx = 0
        //En el eje X el coche podra desplazarse en el intervalo (0, ancho)
        // this.minX = 0
        //this.maxX = this.ctx.canvas.width

        this.width = this.ctx.canvas.width

        this.sprite = new Image()
        this.sprite.src = '../images/car.png'


        this.sprite.isReady = false
        this.sprite.onload = () => {
            this.sprite.isReady = true
        }
        //El movimiento se inicializa a false hasta que el usuario presione la tecla RIGHT o LEFT
        //para desplazarse
        this.movements = {
            right: false,
            left: false
        }
        //La Y es estatica
        //this.minY=this.ctx.canvas.height
        //this.maxY=this.ctx.canvas.height/2
    }

    isReady() {
        return this.sprite.isReady
    }
    draw() {
        if (this.isReady()) {
            this.ctx.drawImage(this.sprite, this.x, this.y, this.width, this.height)
            //this.ctx.drawImage(this.img, this.y + this.height, this.width, this.height)
        }
    }

    move() {
        //this.y += this.vx
        //Llammamos al metodo movement y accedemos al value de su key, si es true ejecuta el if
        if (this.movements.right) {
            this.x += this.vx
            if (this.x + this.width <= 0) {
                this.x = 0
            }
        } else {
            this.x -= this.vx
            if (this.x + this.width >= this.width) {
                this.x = this.width
            }
        }
    }
    //El fondo se mueve y el coche esquiva obstaculos desplazandose a izqda-dcha
    onkeyEvent(event) {
        const status = event.type == 'keydown'
        switch (event.keyCode) {
            case KEY_LEFT:
                //Si presionamos la tecla UP esta obtendra valor keydown (true)
                this.movement.left = status
                break
            case KEY_RIGHT:
                this.movement.right = status
                break
        }
    }
}