class Car {
  constructor(ctx){
    this.ctx = ctx;
    this.y = 0.1 * this.ctx.canvas.height;
    this.w = 50;
    this.h = 50;

    this.img = new Image();
    this.img.src = "./images/car.png"
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

  move(){}
}