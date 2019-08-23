class Car {
    construtor (game) {
        this.game = game;
        this.width = width;
        this.height = height;
        this.xPosition = 0;
        this.yPosition = 0;
        this.yvelocity = 100;
        this.xvelocity = 0;
        this.image = new Image();
        this.scale = 1/3;
        this.image.src("../starter_code/images/car.png")
        this.image.addEventListener('load', event => {this.draw()}) 
   }  
   draw() {
    this.game.context.drawImage(this.image,
      this.image.width*this.scale/2 + this.xPosition,
      this.yPosition,
      this.image.width*this.scale,
      this.image.height*this.scale);
  }

  turn(direction) {
    if (direction === "left") {
      console.log("turning left")
    } else if (direction === "right") {
      console.log("turning right")
    }
  }

}


    
