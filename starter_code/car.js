const UP = 38;
const DOWN = 40;
const RIGHT = 39;
const LEFT = 37;

class Car {
  constructor(ctx){
    this.ctx = ctx;
    this.tick = 0;

    this.y = 470;
    this.x = 80;

    this.w = 50;
    this.h = 100;

    this.vx = 0; //velocidad x
    this.vy = 0; //velocidad y

    this.ax = 0; //aceleracion
    this.ay = 0; //aceleracion

    this.img = new Image();
    this.img.src = "./images/car.png";

    this.setListeners();
  }

  draw(){
    this.ctx.drawImage(
    this.img,
    this.x,
    this.y,
    this.w,
    this.h
    )
  }

  checkBoundaries(){
    if (this.x <= 0) {
      this.x = 0
    } else if (this.x + this.w >= this.ctx.canvas.width) {
      this.x = this.ctx.canvas.width - this.w * 1
    } else if (this.y < 0) {
      this.y = 0
    } else if (this.y + this.h >= this.ctx.canvas.height){
      this.y = this.ctx.canvas.height - this.h * 1
    }
  }

  move(){
    this.vx += this.ax;
    this.vy += this.ay;
    this.x += this.vx;
    this.y += this.vy;
  }

  setListeners() {
    document.onkeydown = (e) => {
      if (e.keyCode === UP) {
        this.vy = -5;
      } else if(e.keyCode === DOWN) {
        this.vy = 5
      } else if (e.keyCode === RIGHT) {
        this.vx = 5
      } else if (e.keyCode === LEFT) {
        this.vx = -5
      }

      document.onkeyup = (e) => {
        if (e.keyCode === DOWN || e.keyCode === UP) {
          this.vy = 0
        } else if (e.keyCode === RIGHT || e.keyCode === LEFT) {
          this.vx = 0
        }
      }
    }
  }
} 