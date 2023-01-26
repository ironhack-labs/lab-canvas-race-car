/** @type{HTMLCanvasElement} */


class Car {
    constructor() {
      this.width =  50
      this.height = 100
      this.x = 225
      this.y = 570
      this.image = new Image();
      this.image.src = "images/car.png";
    }
 
    draw() {
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
 
    update(e) {
      switch (e.code) {
        case "ArrowLeft":
          this.x -= 10;
          break;
        case "ArrowRight":
          this.x += 10;
          break;
      }
 
    }

  }  


