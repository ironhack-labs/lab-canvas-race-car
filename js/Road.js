class Road extends GameComponent {
  constructor(width, height, speed, canvas, imagePath) {
    super(width, height, speed, canvas, imagePath);
  }

  draw() {
    this.context.drawImage(
      this.image,
      0,
      this.y,
      this.canvas.width,
      this.canvas.height
    );

    if (this.speed > 0) {
      this.context.drawImage(
        this.image,
        0,
        this.y - this.canvas.height,
        this.canvas.width,
        this.canvas.height
      );
    }
  }

  move() {
    this.y += this.speed;
    this.y %= this.height;
  }
  clear() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  update() {
    this.clear();
    this.draw();
    this.move();
  }
}
