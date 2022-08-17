const canvasWidth = 282;
const canvasHeight = 441;

class Player {
    constructor() {
        this.w = 30;
        this.h = this.w * 2;
        this.x = canvasWidth / 2 - this.w / 2;
        this.y = canvasHeight - this.h;
        this.speed = 3;
    }

    draw() {
        image(carImg, this.x, this.y, this.w, this.h);
    }

    moveLeft() {
        if (keyIsDown(LEFT_ARROW)) {
          this.x -= this.speed;
        }
    }
    
    moveRight() {
        if (keyIsDown(RIGHT_ARROW)) {
          this.x += this.speed;
        }
    }

    updateAndDraw() {
        this.moveRight();
        this.moveLeft();
        this.x = constrain(this.x, 0, canvasWidth - this.w);
        this.draw();
      }

}