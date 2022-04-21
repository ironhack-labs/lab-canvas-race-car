//Usar o Class constructor como blue print:
class Car {
  constructor() {
    //tamanho do car:
    this.witdh = 100;
    this.heigth = 200;
    //imagem do car:
    this.imgCar = new Image();
    this.imgCar.src = "../images/car.png";
    //posição do car:
    this.x = 200;
    this.y = 450;
  }
  //car:
  drawCar() {
    ctx.drawImage(this.imgCar, this.x, this.y, this.witdh, this.heigth);
  }

  //methods: What we want to do:
  moveLeft() {
    if (this.x > 0) {
      this.x -= 25;
    }
  }

  moveRight() {
    if (this.x + this.width < cWidth) {
      this.x += 25;
    }
  }
  update() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.heigth);
  }
}

class Enemies {
  constructor(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.x = x;
    this.y = y;
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
  crashWith(obstacle) {
    return !(
      this.bottom() < obstacle.top() ||
      this.top() > obstacle.bottom() ||
      this.right() < obstacle.left() ||
      this.left() > obstacle.right()
    );
  }
  update() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
//create the car:
//const car = new Component();
