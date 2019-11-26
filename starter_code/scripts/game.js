class Game {
  constructor() {
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.ground = new Image();
    this.score = 0;
    this.myCar = new MyCar(
      this,
      this.canvas.width / 2,
      this.canvas.height - 120,
      75,
      120
    );
    this.x = 150;
    this.y = 0;
    this.obstacles = new Obstacle(this, this.x, this.y);
  }

  start() {
    this.myCar.drive();
    setInterval(() => {
      this.backGround();
      this.myCar.carImg('./images/car.png');
      this.obstacles.carImg('./images/redCar.png');
      this.obstacles.y += 3;
      if (this.obstacles.y > 750) {
        this.obstacles.y = 0;
        this.obstacles.x = Math.floor(Math.random() * 150 + 150);
        this.score++;
      }
    }, 1000 / 60);
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
    this.ctx.fillStyle = 'white';
    this.ctx.font = '25px Arial';
    this.ctx.fillText(`Score: ${this.score}`, 100, 50);
    this.ctx.fill();
  }
}
