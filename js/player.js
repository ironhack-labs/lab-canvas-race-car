//jshint esversion:6
class PlayersCar {
    constructor (){
        this.x = 200;
        this.y = 500;
        this.dx = 25;
        this.img = new Image();
        this.img.src = "images/car.png";
    }
    moveRight(){

        if(this.x > 374) {
          return;
        }
        this.x += this.dx;
    }
    moveLeft() {

        if(this.x < 51) {
            return;
        }   
        this.x -= this.dx;

    }
    drawCar(){
        context.drawImage(this.img, this.x, this.y, 75, 150);
    }
}

const car = new PlayersCar();