class Car {
  constructor(x, y){
    this.x = road.width / 2 - 25;
    this.y = road.height - 80;
    this.speed = 1;

  }

  moveDown() {
    this.y += 10;
  }

  moveUp() {
    this.y -= 10;
  }

  moveLeft() {
    this.x -= 10;
  }

  moveRight() {
    this.x += 10;
  }

}


