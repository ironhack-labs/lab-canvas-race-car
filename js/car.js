const car = new Car(250, 600, 50, 50, ctx);

class Car {
  constructor(x, y, width, height, car, ctx) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = car;
    this.ctx = ctx;
    this.speedX = 0;
    this.speedY = 0;
  }

  draw() {
    const car = new Image();
    carImage.src = "/images/car.png";
    ctx.drawImage(car, this.x, this.y, 50, 50);
  }

  //create new method for position to simulate speed
  // ?? (do we need to keep this or just the moveLeft and move Right?)
  newPos() {
    this.x += this.speedX;
    this.y += this.speedY;
  }

  moveLeft() {
    this.x -= 10;
  }

  moveRight() {
    this.x += 10;
  }
}

//create helper methods to check collisions (between the player and the obstacles)
/*  top() {
    return this.y;
  }
  bottom() {
    return this.y + this.height;
  }

  left() {
    return this.x;
  }

  right() {
    return this.x + this.width;
  }

  // comparing numbers from player and obstacles to see if they collided
  crashWith(obstacle) {
    return !(
      this.bottom() < obstacle.top() ||
      this.top() > obstacle.bottom() ||
      this.right() < obstacle.left() ||
      this.left() > obstacle.right()
    );
  }
} */

/*  draw() {
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  } */
