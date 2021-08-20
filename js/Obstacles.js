class Obstacles extends GameComponent {
  constructor(width, height, speed, canvas, imagePath) {
    super(width, height, speed, canvas, imagePath);
    this.x = Math.floor(Math.random() * (canvas.width - this.width));
    this.y = -this.height * 2;
    this.arrObstacles = [];
  }

  draw() {
    this.context.drawImage(
      this.image, //img
      this.x, //x
      this.y + this.height, //y
      this.width, //width
      this.height //height
    );
  }

  add(obstacle) {
    this.arrObstacles.push(obstacle);
  }

  move() {
    this.pos += this.speed;
    this.y += this.speed;
    this.y %= this.canvas.height;
  }

  clear() {
    this.context.clearRect(0, 0, this.context.width, this.context.height);
  }

  delete() {
    this.arrObstacles.forEach((obstacle) => {
      if (obstacle.pos > this.canvas.height) {
        this.arrObstacles.splice(this.arrObstacles.indexOf(obstacle), 1);
      }
    });
  }

  update() {
    this.clear();
    this.draw();
    this.move();
  }
}
