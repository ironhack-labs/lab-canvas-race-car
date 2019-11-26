class Game {
  constructor() {
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.ground = new Image();
    this.x = 0;
    this.y = 0;
    this.posX = 150;
    this.posY = 0;
    this.carWidth = 75;
    this.carHeight = 120;
    this.score = 0;
    this.myCar = new MyCar(
      this,
      this.canvas.width / 2,
      this.canvas.height - 130,
      this.carWidth,
      this.carHeight
    );
    this.obstacles = new Obstacle(
      this,
      this.posX,
      this.posY,
      this.carWidth,
      this.carHeight
    );
    this.dead = new Audio();
    this.dead.src = './audio/dead.mp3';
    this.point = new Audio();
    this.point.src = './audio/point.mp3';
  }

  start() {
    this.myCar.drive();
    const intervalID = setInterval(() => {
      this.backGround();
      this.myCar.carImg('./images/car.png');
      this.obstacles.carImg('./images/redCar.png');
      this.obstacles.y += 3;
      if (this.obstacles.y > this.canvas.height + this.carHeight) {
        this.obstacles.y = 0;
        this.obstacles.x = Math.floor(Math.random() * 150 + 150);
        this.score++;
        this.point.play();
      }
      if (this.myCar.collision(this.obstacles)) {
        this.gameOver();
        clearInterval(intervalID);
        this.dead.play();
      }
    }, 1000 / 60);
  }

  backGround() {
    this.ground.src = './images/road.png';
    this.ctx.drawImage(
      this.ground,
      this.x,
      this.y,
      this.canvas.width,
      this.canvas.height
    );
    this.ctx.fillStyle = 'white';
    this.ctx.font = '25px Arial';
    this.ctx.fillText(`Score: ${this.score}`, 100, 50);
    this.ctx.fill();
  }

  clear() {
    this.ctx.clearRect(this.x, this.y, this.canvas.width, this.canvas.height);
  }

  gameOver() {
    {
      setTimeout(() => alert('crash'), 5);
      window.location.reload();
    }
    //   this.clear();

    //   this.ctx.font = ' 45px Arial';
    //   this.ctx.textAlign = 'center';
    //   this.ctx.fillStyle = 'red';
    //   this.ctx.fillText(
    //     'Game Over',
    //     this.canvas.width / 2,
    //     this.canvas.height / 2
    //   );
  }
}
