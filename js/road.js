class Road {
    constructor(ctx) {
        this.ctx = ctx;
        this.y = 0;
        this.vy = 4;

        this.width = this.ctx.canvas.width
        this.height = this.ctx.canvas.height

        this.img = new Image();
        this.img.src = "https://raw.githubusercontent.com/miguelbanos95/lab-canvas-race-car/master/images/road.png"
        //si el background(road) es false, significa que no ha cargado la imagen aun, 
        this.img.isReady = false
        //entonces cuando el background esta cargado ya empieza a pintar lo demas.
        this.img.onload = () => {
            this.img.isReady = true
            //cuando es true pinta lo demas (el draw())
        }

    }

    draw() {
        if (this.img.isReady) {
            this.ctx.drawImage(
                this.img,
                0,
                this.y,
                this.width,
                this.height
            )
            this.ctx.drawImage(
                this.img,
                0,
                this.y - this.height,
                this.width,
                this.height
            )
        }

    }

    move(){
        this.y += this.vy;
        if (this.y >= this.height) {
            this.y = 0
          }
    }

}

