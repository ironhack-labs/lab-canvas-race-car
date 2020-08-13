/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable max-classes-per-file */
class drawBoard {
  constructor(canvas, context, posX, posY, width, height) {
    this.canvas = canvas;
    this.context = context;
    this.posX = posX;
    this.posY = posY;
    this.width = width;
    this.height = height;
  }

  move(speed) {
    if (this.posY === 700) {
      this.posY = 0;
    } else {
      this.posY += speed;
    }
  }

  left() {
    return this.posX;
  }

  right() {
    return this.posX + this.width;
  }

  top() {
    return this.posY;
  }

  bottom() {
    return this.posY + this.height;
  }

  crashWith(obstacle) {
    return !(this.bottom() < obstacle.top() || this.top() > obstacle.bottom() || this.right() < obstacle.left() || this.left() > obstacle.right());
  }
}

// Road: image, width, height, posX, posY, context, canvas, drawlane, movelane
class road extends drawBoard {
  constructor(canvas, context, posX, posY, width, height, image) {
    super(canvas, context, posX, posY, width, height);
    this.image = image;
  }

  clearLane() {
    this.context.clearRect(this.posX, this.posY, this.width, this.height);
  }

  drawLane() {
    this.context.drawImage(this.image, this.posX, this.posY, this.width, this.height);
    this.context.drawImage(this.image, this.posX, this.posY - this.height, this.width, this.height);
  }

}

// Car: image, width, height, posX, posY, context, canvas, drawcar, movecar, collision 
class car extends drawBoard {
  constructor(canvas, context, posX, posY, width, height, image) {
    super(canvas, context, posX, posY, width, height);
    this.image = image;
  }

  drawCar() {
    this.context.drawImage(this.image, this.posX, this.posY, this.width, this.height);
  }

  move(keyCode, speed) {
    // eslint-disable-next-line default-case
    switch (keyCode) {
      case 37:
        if (this.posX > 65) {
          this.posX -= speed;
        }
        break;
      case 39:
        if (this.posX < 385) {
          this.posX += speed;
        }
        break;
    }
  }
}

// Obstacle: color, width, height, posX, posY, context, canvas, drawobstacle, moveobstacle, collision
class obstacle extends drawBoard {
  constructor(canvas, context, posX, posY, width, height, color) {
    super(canvas, context, posX, posY, width, height);
    this.color = color;
    this.frames = 0;
    this.minGap = 50;
    this.maxGap = 200;
    this.context.fillStyle = this.color;
  }

  drawObstacle() {
    this.context.fillRect(this.posX, this.posY, this.width, this.height);
  }
}
