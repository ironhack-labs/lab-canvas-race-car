class Car {
    constructor (game){
        this.LIMITLEFT = 64.75;
        this.LIMITRIGHT = game.width - 84.5;
        this.image = new Image();
        this.image.src = 'images/car.png'
        this.y = 418//(game.height-(this.image.height*0.25));
        this.x = 156// (game.width-this.image.width*0.25)/2;
        this.moveSpeed = 10;
        this.reducer = 0.2
        this. height = (this.image.height)*this.reducer
        this.width = 0//(this.image.width)*this.reducer
    }
    moveLeft(){
        if(this.x>this.LIMITLEFT){
          this.x-=this.moveSpeed;
          //console.dir(this.image);
        }
      }
    moveRight(){
        if(this.x<this.LIMITRIGHT){
            this.x+=this.moveSpeed;
        }
    }

    drawCar(game){
        const carImageReducer = 0.20;
        const carImageWidth = this.image.width*carImageReducer;
        const carImageHeight = this.image.height*carImageReducer;
        game.context.drawImage(this.image,this.x,this.y,carImageWidth,carImageHeight)
    }
}
