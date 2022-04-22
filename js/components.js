class Player1 {
  constructor(x, y, img) {
    this.x = x;
    this.y = y;
    this.img = drawCar()
  }

  moveLeft() {
    this.x -= 10;
  }

  moveRight() {
    this.x += 10;
  }
}

