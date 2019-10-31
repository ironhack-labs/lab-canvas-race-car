class Car {
  constructor(){

  }

  drawCar() {
    const carImg = new Image;
    carImg.src = 'images/car.png';
  
    carImg.addEventListener('load', event => {
      ctx.drawImage(carImg, 175, 460, 50, 100);
    });
  }

}