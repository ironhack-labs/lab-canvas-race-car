const carImg = document.createElement('img');
carImg.src = '../images/car.png';

class Car {

    constructor(canvasContext, positionX, positionY){
        this.ctx = canvasContext,
        this.image = carImg,
        this.x = positionX,
        this.y = positionY,
        this.width = 50,
        this.height = 100
    }

    draw(){
        this.ctx.drawImage(carImg, this.x, this.y, this.width, this.height);
    }
}