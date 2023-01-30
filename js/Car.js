class Car {
    constructor(){
      this.x = 220;
      this.y = 520;
      this.width = 50;
      this.height = 80;
      this.img = './images/car.png';
    }
    
    drawCar(){
      const carImg = new Image();
      carImg.src = this.img;
      ctx.drawImage(carImg, this.x, this.y, this.width, this.height);
    }

    moveCar(keyCode){
      console.log('x', this.x);
      console.log('y', this.y);
      ctx.clearRect(this.x, this.y, this.width, this.height);
      switch(keyCode){
        case 37:
        //Making sure car doesn't go off the road
        if(this.x > 20){
          this.x -= 10;
        }
          break;
        case 39:
        //Making sure car doesn't go off the road
        if (this.x < 430 ){
          this.x += 10;
        }
          break;
      }
    }
  }
