class Car {
    constructor(ctx){
        this.ctx = ctx;
        this.img = new Image();
        this.img.src = 'images/car.png';
    }

    draw(){
        this.ctx.drawImage(
            this.img,
            225,
            550,
            50,
            100
        )
    }

}