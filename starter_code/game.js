class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.bg = new Background(ctx)
    this.car = new Car(ctx)
    this.obstacles = []
  
    this.intervalId = null;
    this.tick = 0
    this.score=0
  }

  run() {
    this.intervalId = setInterval(() => {
      this._clear()
      this._draw()
      this._move()
      this._clearObstalces()
      this._checkCollision()
      
    }, 1000/60)
  }

  _clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
  }

  _draw() {
    this.bg.draw()
    this.car.draw()
    this.obstacles.forEach(o=>{o.draw()})

    if(this.tick++ > Math.random()*500+30){
      this.tick =0
      this._addObstacle()
    }
    this._score()
  }

  _checkCollision(){
    this.obstacles.forEach(o =>{
      if((this.car.x + this.car.w >= o.x 
        && this.car.x <= o.x+o.w )
        && (this.car.y <= o.y + o.h
        && this.car.y + this.car.h >= o.y) )
    {
      this._stop();
    }})
  }

  _stop() {
    clearInterval(this.intervalId)
  //  this._finalScore()
  }
  _clearObstalces(){
    this.obstacles = this.obstacles.filter(o => {
      return o.y + o.h <= this.ctx.canvas.height
    })
  }
  _move() {
    this.score +=1/30
    this.bg.move()
    this.car.move()
    this.obstacles.forEach(o=>{o.move()})
  }

  _addObstacle(){
    this.obstacles.push(new Obstacle(this.ctx))
  }

  _finalScore(){
    this._clear()
    this._drawMessage("Your Final Score " + Math.floor (this.score))
  }
  _score(){
    this._drawMessage("Score " + Math.floor (this.score))
  }

  _drawMessage(message) {
    this.ctx.font = "10px sans-serif";
    this.ctx.lineWidth = 1;
   this.ctx.fillText(message, this.ctx.canvas.width/3, this.ctx.canvas.height -2);
  }
}