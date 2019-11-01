class Obstacles {
    constructor(game) {
      this.height = game.height;
      this.width = this.getRandom(100, 200)
      this.context = game.context;
      //this.radius = 40;
      this.x = this.getRandom(40,200)
      this.y = -200;
      this.vy = 4;
  }

    getRandom(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
}

    draw () {
      this.context.fillStyle = 'red';
      //this.context.fillRect(this.getRandom(40,200), 0, this.getRandom(50, 200), 30);
      this.context.fillRect(this.x, this.y, this.width, 30);
  } 

/*   Need to finish
  checkCollision(a,b) {
    if ((a===b) && (this.game.fastCar)
  } */

  update() {
    console.log(this.y)
    this.y += this.vy;
  } 

}