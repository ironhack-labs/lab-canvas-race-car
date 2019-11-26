class Game {
  constructor() {
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.ground = new Image();
    this.score = 0;
    this.myCar = new MyCar(this);
  }

  start() {
    this.myCar.drive();
    setInterval(() => {
      this.backGround();
      this.myCar.carImg();
    });
  }

  backGround() {
    this.ground.src = './images/road.png';
    this.ctx.drawImage(
      this.ground,
      0,
      0,
      this.canvas.width,
      this.canvas.height
    );
  }
}
