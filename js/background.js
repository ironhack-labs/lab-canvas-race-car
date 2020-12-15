class Background { // si queremos dos backgrounds en game lo hacemos (DAY3-11dic 02:15')
    constructor(ctx) {
        this.ctx = ctx

        this.x = 0
        this.y = 0

        this.height = this.ctx.canvas.height
        this.width = this.ctx.canvas.width

        this.vy= 2

        this.img = new Image()
        this.img.src = '../images/road.png' // como si estuvieramos en la carpeta de html porque está importado
        this.img.isReady = false
        this.img.onload = () => {
            this.img.isReady = true
        }

    }

    isReady() {
        return this.img.isReady
    }

    draw() {
        if (this.isReady()) { //comprobación que no me falla el navegador hasta que este todo cargado
            this.ctx.drawImage(
                this.img,
                this.x,
                this.y,
                this.width,
                this.height
            )

            this.ctx.drawImage( //imagen 2
                this.img,
                this.x,
                this.y - this.height,
                this.width,
                this.height
            )
        } 
    }

    move() {
        this.y += this.vy

        if (this.y >= this.width) {
            this.y = 0
        }
    }
}