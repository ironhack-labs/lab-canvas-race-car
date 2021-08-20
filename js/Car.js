class Car extends GameComponent {
  constructor(width, height, speed, canvas, imagePath) {
    super(width, height, speed, canvas, imagePath);
  }

  draw() {
    this.context.drawImage(
      this.image,
      (this.canvas.width + this.x - this.width) / 2,
      this.canvas.height + this.y - this.height - 20,
      this.width,
      this.height
    );
  }
  moveLeft(borderLeft) {
    if (this.x > borderLeft) this.x -= this.speed;
  }

  moveRight(borderRight) {
    if (this.x < borderRight) this.x += this.speed;
  }

  clear() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  update() {
    this.clear();
    this.draw();
  }
}
