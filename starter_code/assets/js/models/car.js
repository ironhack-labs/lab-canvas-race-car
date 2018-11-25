function Car (ctx, x, y) {
  
  this.ctx = ctx;
  
  this.x = (x/2) - 37 || 0;
  this.y = (y-200) || 0;
  
  this.img = new Image();
  this.img.src = "./images/car.png";

  this.vx = 0;
  this.vy = 0;

  this.movements = {
    up: false,
    down: false,
    right: false,
    left: false
  }
}

Car.prototype.onKeyEvent = function (event) {
  
  var state = (event.type === "keydown");
  switch (event.keyCode) {
    case KEY_LEFT:
      this.movements.left = state;
      break;
    case KEY_RIGHT:
      this.movements.right = state;
      break;
  }
}

Car.prototype.animate = function() {
  
  if (!this.collideWithBorder()) {
    if (this.movements.right) {
      this.vx = CAR_SPEED_MOVE;
    }
    if (this.movements.left) {
      this.vx = -CAR_SPEED_MOVE;
    }
    this.x += this.vx;
    this.vx *= FRICTION;
  } 
} 

Car.prototype.collideWithBorder = function() {
  
  if (this.x < 100) {
    this.x += CAR_SPEED_MOVE;
    return true;
  } else if(this.x > (this.ctx.canvas.width - 100- CAR_WIDTH)) {
    this.x -= CAR_SPEED_MOVE;
    return true;
  } else {
    return false;
  }   
}

Car.prototype.collideWithObstacle = function(obstacle) {
  
  return (obstacle.y + obstacle.height > this.y &&
          this.x + CAR_WIDTH > obstacle.x &&
          this.x < obstacle.x + obstacle.width &&
          this.y + CAR_HEIGHT > obstacle.y);
}

Car.prototype.draw = function () {
  
  this.animate();
  this.ctx.drawImage(this.img, this.x, this.y, CAR_WIDTH, CAR_HEIGHT); 
}


