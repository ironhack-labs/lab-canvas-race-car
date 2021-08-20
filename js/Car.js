class Car extends GameComponent {
  constructor(width, height, speed, canvas, imagePath) {
    super(width, height, speed, canvas, imagePath);
    this.x = (this.canvas.width - this.width) / 2;
    this.y = this.canvas.height - this.height - 20;
  }

  draw() {
    this.context.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
  moveLeft() {
    if (this.x - this.width / 4 > 0) this.x -= this.speed;
  }

  moveRight() {
    if (this.x + this.width < this.canvas.width) this.x += this.speed;
  }

  clear() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  update() {
    this.clear();
    this.draw();
  }
}
