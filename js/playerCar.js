class PlayerCar {
    constructor(x,y,image,width,height){
        this.image = image;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speedX = 0;
        this.speedY = 0;
    }

  update(ctx) {
        ctx.drawImage(this.image,this.x,this.y,50,100);
    }

    newPos() {
        this.x += this.speedX;
        this.y += this.speedY;
    }

    goLeft(){
        this.x > 50 ? this.speedX-- : this.x = 50;  
    }

    goRight(){
        this.x < 400 ? this.speedX++ : this.x = 400;
    }

     left() {
    return this.x;
  }

  right() {
    return this.x + this.width;
  }

  top() {
    return this.y;
  }

  bottom() {
    return this.y + this.height;
  }

isCrashedWith(obstacle) {
    const condition = !(
      this.bottom() < obstacle.top() ||
      this.top() > obstacle.bottom() ||
      this.right() < obstacle.left() ||
      this.left() > obstacle.right()
    );

    return condition;
  }

}