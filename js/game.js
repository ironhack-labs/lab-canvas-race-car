class Game {
  constructor(canvasId) {
    this.intervalId = null;
    const canvas = document.getElementById(canvasId);
    canvas.height = 700;
    canvas.width = 500;
    this.drawCount = 0
    this.ctx = canvas.getContext("2d");
    this.background = new Background(this.ctx);
    this.car = new Car(this.ctx);
    this.score = new Score(this.ctx);
    this.obstacles = [];

    this.audio = new Audio('./assets/sounds/bso.mp3')
    this.audioGameOver = new Audio('./assets/sounds/gameover.wav')

  }

  start() {
    this.audio.play()
    this.intervalId = setInterval(() => {
      this.clear();
      this.move();
      this.draw();
      this.addObstacles();
      if (this.drawCount++ > 10000) {
        this.drawCount = 0;

      }
      this.checkCollisions()
      
    }, 1000 / 60)
  }

  stop() {
    clearInterval(this.intervalId)
    
  }

  onKeyEvent(event) {
    this.car.onKeyEvent(event)
  }

  clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.heigth);
    this.clearObstacles()
  }

  clearObstacles() {

    this.obstacles = this.obstacles.filter(ob => {
      if (ob.isVisible()) {
        return true
      } else {
        this.scorePoints()
      }
    })
  }


  draw() {
    this.background.draw();
    this.car.draw();
    this.score.draw();
    this.obstacles.forEach(ob => ob.draw())

  }

  move() {
    this.background.move();
    this.obstacles.forEach(ob => ob.move());
  }

  addObstacles() {
    if (this.drawCount % 120) {
      return
    }
    this.obstacles.push(new Obstacles(this.ctx));

  }

  checkCollisions() {
    const collision = this.obstacles.some(ob => ob.collide(this.car));
    if (collision) {
      this.gameOver();

    }
  }

  scorePoints() {   
      this.score.points++    

  }

  gameOver() {
    
    clearInterval(this.intervalId)
    this.audio.pause()
    this.audioGameOver.play()
    this.ctx.font = "800 80px sans-serif";
    this.ctx.textAlign = "center";
    this.ctx.fillText(
      "GAME",
      this.ctx.canvas.width / 2,
      this.ctx.canvas.height / 3
    );
    this.ctx.font = " 800 italic 80px sans-serif";
    this.ctx.textAlign = "center";
    this.ctx.fillStyle = "#870007";
    this.ctx.fillText(
      "OVER",
      this.ctx.canvas.width / 2,
      this.ctx.canvas.height / 2
    );

  }

}