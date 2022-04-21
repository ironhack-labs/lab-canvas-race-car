class Component {
  constructor(src, x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;

    if (src) {
      const img = new Image();
      img.addEventListener("load", () => {
        this.img = img;
      });

      img.src = src;
    }
  }
  imgBuilder() {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
  left() {
    return this.x;
  }

  right() {
    return this.x + this.width;
  }

  top() {
    return this.y;
  }
  bottom() {
    return this.y + this.height;
  }

  newPos() {
    this.x += this.speedX;
    this.y += this.speedY;
  }

  moveLeft() {
    this.x -= 25;
  }

  moveRight() {
    this.x += 25;
  }

  crashWith(obstacle) {
    return !(
      this.bottom() < obstacle.top() ||
      this.top() > obstacle.bottom() ||
      this.right() < obstacle.left() ||
      this.left() > obstacle.right()
    );
  }
}

class Obstascle extends Component {
  constructor(src, x, y, width, height, color) {
    super(src, x, y, width, height);
    this.color = color;
  }

  update() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
