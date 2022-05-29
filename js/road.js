class road {
  constructor(canvas, ctx, moveSpeed) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.image = new Image();
    this.y = 0;
    this.moveSpeed = moveSpeed;
    this.init();
  }
  init() {
    this.image.src = "images/road.png";
    this.image.addEventListener("load", this.draw);
  }
  draw() {
    this.ctx.drawImage(this.image, 0, this.y, canvas.width, canvas.height);
    this.ctx.drawImage(
      this.image,
      0,
      this.y - this.canvas.height,
      canvas.width,
      canvas.height
    );
  }

  move() {
    this.y += this.movsSpeed;
    if(this.y >= this.canvas.height){
        this.y = 0 
    }
  }
}
