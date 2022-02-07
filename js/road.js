class Road {
constructor(ctx){
    this.ctx = ctx;

  this.img = new Image(); 
  this.img.src = '/Users/pedroalbertobanosfolcra/Desktop/Ironhack/modul1/lab-canvas-race-car/images/road.png';

    this.y = 0
    this.vy = 6

    this.width = this.ctx.canvas.width
    this.height = this.ctx.canvas.height

    this.img.isReady = false;
  this.img.onload = () => {
    this.draw()
        }
      this.img.isReady = true;
    }
    draw() {
      if (this.img.isReady) {
        this.ctx.drawImage(
          this.img,
          0,
          this.y,
          this.width,
          this.height,
        )
        this.ctx.drawImage(
          this.img,
          0,
          this.y - this.height,
          this.width,
          this.height,
        )
      }  
      
      }

      move() {
        this.y += this.vy
    
        if (this.y >= this.height) {
          this.y = 0
        }
      }


}