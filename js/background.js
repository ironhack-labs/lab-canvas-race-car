class Background {
    constructor(ctx){

        this.ctx = ctx;
        this.width = 500;
        this.height = 700;

        this.image = new Image();
        this.image.src = '/images/road.png'

        this.posX = 0;
        this.posY = 0;

    }

    draw(){
        this.ctx.drawImage(this.image, this.posX, this.posY, 500, 700)
        console.log('drawing bg')
    }
}