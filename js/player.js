class Player {
  constructor(ctx, x, y, w, h) {
    this.ctx = ctx;
      //coordinates where the player will appear
    this.x = x;
    this.y = y;
      // size of the player
    this.width = w;
    this.height = h;
    
      // player image : car
    this.img = new Image();
    this.img.src = "/images/car.png";
    this.img.onload = () => {
      this.draw();
    };


    // px is going to move x each frame
    this.speed = 6;
    //  speed on the axis
    this.vx = 0;
    this.vy = 0;

    this.movements = {
      up: false,
      down: false,
      left: false,
      right: false
    };
  }

  draw() {
    this.ctx.drawImage(
      this.img,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }

  setupListeners(event) {
    const status = event.type === 'keydown';

    switch(event.keyCode) {
      case KEY_UP:
        this.movements.up = status;
        break;
      case KEY_DOWN:
        this.movements.down = status;
        break;
      case KEY_RIGHT:
        this.movements.right = status;
        break;
      case KEY_LEFT:
        this.movements.left = status;
        break;
      default:
        break;
    }
  }
  

  move() {
    // if no L or R input, on the axis x speed = 0
    if (!this.movements.right && !this.movements.left) {
      this.vx = 0;
    }
    // if no Up or Down input, on the axis Y speed = 0
    if (!this.movements.up && !this.movements.down) {
      this.vy = 0;
    }
    
    if (this.movements.right) {
      this.vx = this.speed;
    }
    if (this.movements.left) {
      this.vx = -this.speed;
    }

    if (this.movements.up) {
      this.vy = -this.speed;
    }
    if (this.movements.down) {
      this.vy = this.speed;
    }

    this.x += this.vx;
    this.y += this.vy;
    
    // respect the borders
    // the left border
    if (this.x <= 0) {
      this.x = 0;
    }
    // the right border
    if (this.x + this.width >= this.ctx.canvas.width) {
      this.x = this.ctx.canvas.width - this.width;
    }
    // the top border
    if (this.y <= 0) {
      this.y = 0;
    }
    // the lower border
    if (this.y + this.height >= this.ctx.canvas.height) {
      this.y = this.ctx.canvas.height - this.height;
    }
  }

  //if one of the sides side collides with the obstacle, return true
  collidesWith(obst) {
    if (
      this.x < obst.x + obst.width &&
      this.x + this.width > obst.x &&
      this.y < obst.y + obst.height &&
      this.y + this.height > obst.y
    ) {
      return true;
    }

    return false;
  }
  
   
}

  