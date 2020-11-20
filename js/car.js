class Car {
    constructor() {
      this.x = 0;
      this.y = 0;
      
      const carImg = new Image();
  
      carImg.addEventListener('load', () => {
        // Once image loaded => draw
        this.carImg = carImg;
    
      });
      carImg.src = "./images/car.png";
    }
    moveLeft() {
      this.x -= 5;
    }
    moveRight() {
      this.x += 5;
    }
    draw() {
      mainCtx.drawImage(this.carImg, this.x, this.y, 60, 120);
    }
  }
  
  const car = new Car();