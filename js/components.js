/** @type{HTMLCanvasElement} */

  class Obstacle {

    constructor() {
      this.width = Math.floor(Math.random() * 150 - 10) + 10; 
      this.height = 20;
      this.x = Math.floor(Math.random() * (canvas.width + 1));
      this.y = 0;
    }
 
    draw() {
      ctx.fillStyle = "red";
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
 
    update() {
      ctx.fillStyle = "red";
      ctx.fillRect(this.x, this.y, this.width, this.height);
      this.y += 3;
    }
  }


