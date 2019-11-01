// CAR CLASS

class Car {
    constructor(game) {
      this.game = game;
      this.posX = 130;
      this.posY = 350;
      this.velocity = 0;
    }
  
    drawCar() {
        const RATIO = carImage.height / carImage.width;
        const SIZE = 50;
        this.game.context.drawImage(carImage, this.posX, this.posY, SIZE, SIZE * RATIO);
    }

    updateCar(){
        if(this.posX + this.velocity < 55){
            this.posX = 55;
        } else if (this.posX + this.velocity > 395){
            this.posX = 395;
        } else {
            this.posX += this.velocity;
        }
        //console.log(this.posX);
    }

  }