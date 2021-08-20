class GameComponent {
  constructor(width, height, speed, canvas, imagePath) {
    this.width = width;
    this.height = height;
    this.x = 0;
    this.y = 0;
    this.pos = 0;
    this.speed = speed;
    this.image = null;
    this.canvas = canvas;
    this.context = canvas.getContext("2d");

    const img = new Image();
    img.src = imagePath;
    this.image = img;
  }
}
