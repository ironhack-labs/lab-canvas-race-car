class Player {
    constructor(ctx, x, y, width, height) {
         this.ctx = ctx;
         this.x = x;
         this.y = y;
         this.width = width;
        this.height = height;
         this.img = new Image();
         this.img.src = "./images/car.png"
        this.isReady = false;
		this.img.onload = () => {
        this.height = this.width * this.img.height / this.img.width;
        this.isReady = true;
          };
    }; 
    
    draw() {
		if (this.isReady) {
			this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
		}
    }
}