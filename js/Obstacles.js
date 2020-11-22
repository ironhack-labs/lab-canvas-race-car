class Obstacle {
    constructor(x, y, width, context) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = 30;
      this.context = context;
    }
  
    draw() {
      this.y += 4;
      this.context.fillRect(this.x, this.y, this.width, this.height);
    }
    collisionDetection = (car) => {
      if (
        !(
          car.x > this.x + this.width ||
          car.x + car.width < this.x ||
          car.y > this.y + this.height ||
          car.y + car.height < this.y
        )
      ) {
        return true;
      }
      return false;
    };
  }