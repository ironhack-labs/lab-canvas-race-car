class Player {
    constructor(ctx, x, y) {
        this.ctx = ctx;

        this.x = x;
        this.y = y;

        this.width = 50
        this.height = 100

        this.img = new Image;
        this.img.src = './images/car.png'
        this.img.onload = () => {
            this.draw()
        }
    }

    draw() {
        this.ctx.drawImage(
            this.img,
            this.x,
            this.y,
            this.width,
            this.height,
        )
    }

    move(arrowPresed) {

        this.ctx.clearRect(0, 0, this.img.canvas.width, this.ctx.canvas.height)

         if(arrowPresed == 39 ) {
             this.x = this.x + 10
         } else {
            this.x = this.x - 10
         }

        this.draw()
    }


}