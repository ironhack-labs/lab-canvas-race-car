class Car {
 constructor(ctx){
     this.ctx = ctx;
     this.x = CANVAS_WIDTH / 2
     this.y = 600;
     this.img = new Image();
     this.w = 50;
     this.h = 100;
     this.img.src ="/images/car.png";
     this.vx = 0;
 }

 draw() {
    this.ctx.drawImage(
     this.img,
     this.x,
     this.y,
     this.w,
     this.h
   )
 }
}
