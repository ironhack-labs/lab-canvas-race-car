

class Game{
    constructor(ctx){
        this.ctx =ctx

        this.board= new Board(ctx)
        this.car= new Car(ctx,this.ctx.canvas.width/2,this.ctx.canvas.height/2)
        this.obstacles=[]
        this.obstacleCount=0;
        this.interval = undefined
    }

    start() {
        this.inverval = setInterval(() => {
          this.clear()
          this.move()
          this.draw()
          this.checkCollisions()
          this.obstacleCount++

          if(this.obstacleCount % this.car.heigth*2 ===0){
            this.addObstacle()

            this.obstacleCount=0
          }
          
        }, 1000 / 60)
      }
    
      clear() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
      }
    
      draw() {
        this.board.draw()
        this.car.draw()
        this.obstacles.forEach(obstacle => obstacle.draw())
      }
    
      move() {
        this.board.move()
        this.car.move()
        this.obstacles.forEach(obstacle => obstacle.move())
      }

      onKeyEvent(event){
        this.car.onKeyEvent(event)
        console.log()
      }

      addObstacle(){
        const maxSpace = this.ctx.canvas.width - this.car.width*2
        const theWidth = Math.floor(Math.random()*maxSpace)
        

        this.obstacles.push(
          new Obstacle(this.ctx,theWidth,10,theWidth)
          
        )

        console.log(this.obstacles)
      }

      checkCollisions(){
        if(this.obstacles.some(obstacle => this.car.collisionWith(obstacle))){
          alert('collision')
        }
      }
}

