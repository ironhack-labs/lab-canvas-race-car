//Player Class

class Player {
    constructor(x, y, w, h, color, ctx) {
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.color = color;
      this.ctx = ctx;
    }

    clearBoard(){
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    drawCar() {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.w, this.h);
    }

    driveLeft() {
      if (didYouStart === 1) {
        if (this.x > 80) {
          this.clearBoard();
          this.x -= 20;
          ctx.fillStyle = this.color;
          ctx.fillRect(this.x, this.y, this.w, this.h);
        }
      }
    }
    
    driveRight() {
      if (didYouStart === 1) {
        if (this.x < 385) {
          this.clearBoard();
          this.x += 20;
          ctx.fillStyle = this.color;
          ctx.fillRect(this.x, this.y, this.w, this.h);
        }
      }
    }
  }