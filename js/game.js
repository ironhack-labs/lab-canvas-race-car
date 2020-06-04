class Game {
  constructor(ctx){
    this._ctx = ctx
    this._intervalId = null
    this._bg = new Background(ctx)
    this._car = new Car(ctx)
    this.obstacles = []
    this.score = 0

    this.tick = 0

  }

  start() {
    this._intervalId = setInterval(() => {
      this._clear()
      this._draw()
      this._move()

      this._addObstacle()
      this._checkCollisions()
      this._removeObstacle()

      if (this.tick++ > 10000) {
        this.tick = 0
      }
    }, 1000 / 60);

    
    

  }

  _clear() {
    this._ctx.clearRect(0, 0, this._ctx.canvas.width, this._ctx.canvas.height)
  }

  _draw() {
    this._bg.draw()
    this._car.draw()
    this.obstacles.forEach(o => o.draw())
  }

  _move() {
    this._bg.move()
    this._car.move()

    this.obstacles.forEach(o => o.move())
    
  }
  _addObstacle(){
    if (this.tick % 100) return

    this.obstacles.push(new Obstacle(this._ctx))
  }
  _removeObstacle(){
    this.obstacles = this.obstacles.filter(e =>{
      if(e.y < this._ctx.canvas.height){
        return e
      }else{
        this.score++
        score.innerHTML = this.score
      }
      
      
    }
     
        
   )
   

  }
  _checkCollisions() {
    const col = (this.obstacles.some(o => o.collide(this._car)) )

    if (col) {
      this._gameOver()
    } 
      
    
  }
  _gameOver() {
    clearInterval(this._intervalId)

    this._ctx.font = "40px Arial";
    this._ctx.textAlign = "center";
    this._ctx.fillText(
      "GAME OVER",
      this._ctx.canvas.width / 2,
      this._ctx.canvas.height / 2
    );
  }

}