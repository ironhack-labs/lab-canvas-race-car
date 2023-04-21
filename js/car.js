// Player / Car Class

class Car {
    constructor() {
      this.x = 230;
      this.y = 600;

      // Asigning Car image
      const carImg = new Image();
      carImg.addEventListener("load", () => {
      this.carImg = carImg;});
      carImg.src = '../images/car.png';
    }
  
    moveLeft(){
      this.x -= 10;
    }
  
    moveRight(){
      this.x += 10;
    }
  
    draw(){
      ctx.drawImage(this.carImg, this.x, this.y, 40, 80); // Draws the actual car image
    }
    
    top(){
      return this.y;
    }

    bottom(){
        return this.y + this.h;
    }

    left(){
        return this.x;
    }

    right(){
        return this.x + this.w;
    }

    moveLimiter(){
      if(this.x<0){                   // limits the car to the canvas border
         this.x=0;
      }
      if(this.x>=canvas.width-40){
         this.x=canvas.width-40;
      }
    }

    crashWith(enemy){
      return (this.bottom() > enemy.top() &&
              this.top() < enemy.bottom() && 
              this.left() < enemy.right() &&
              this.right() > enemy.left() )
    }
}