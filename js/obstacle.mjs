class Obstacles {
  constructor(canvas, x, y, width, height) {
    this.size;
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.x = x;
    this.y = y;
    this.speed = 4;
    this.width = width;
    this.height = height;
  }

  update() {
    this.y = this.y + this.speed;
  }

  draw() {
    this.ctx.fillStyle = 'green';
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

export default Obstacles;
