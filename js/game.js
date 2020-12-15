

class Game{
    constructor(ctx){
        this.ctx =ctx

        this.ctx.canvas.width = 500
        this.ctx.canvas.height = 700

        this.board= new Board(ctx)
        this.car= new Car(ctx,this.ctx.canvas.width/2,this.ctx.canvas.height/2)

        this.obstacles=[]
        this.obstacleCount=0;
        this.drawInterval = undefined
        
    }

    start() {
        this.drawInterval = setInterval(() => {
          this.clear()
          this.move()
          this.draw()
          this.checkCollisions()
          this.obstacleCount++

          if(this.obstacleCount % 120 ===0){
            this.addObstacle()

            
            console.log(this.obstacleCount)
            this.obstacleCount = 0;
          }
          
        }, 1000 / 60)
      }
    
      clear() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
      }
      
      showPoints(){
        this.ctx.font = '25px Sans-serif'
        this.ctx.fillStyle = 'white'
        this.ctx.textAlign = 'left'
          if(this.obstacles.length===1||this.obstacles.length===0){
            return 0
          }else{
            return  this.obstacles.length-1
          }
      }

      draw() {
        this.board.draw()
        this.car.draw()
        this.obstacles.forEach(obstacle => obstacle.draw())
        this.ctx.fillText(
          `Your score: ${this.showPoints()}`,
          this.ctx.canvas.width / 6,
          50,
        )
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
        const maxSpace = this.ctx.canvas.width - this.car.width*1.5
        const minSpace = this.ctx.canvas.width/2
        const theWidth = Math.floor(Math.random()*(maxSpace-minSpace) + minSpace)


        this.obstacles.push(
          new Obstacle(this.ctx,Math.floor(Math.random()*this.ctx.canvas.width),0,theWidth)
        
        )
        this.obstacleCount= this.obstacles.length
        console.log(this.obstacles)
      }

      checkCollisions(){
        
        if(this.obstacles.some(obstacle => this.car.collisionWith(obstacle))){
          //Paint the background
          this.stop()
          this.ctx.fillStyle = 'rgba(0, 0, 0)'
          this.ctx.fillRect(0,0,this.ctx.canvas.width,this.ctx.canvas.height)
          //Paint the game over
          this.ctx.save()
          this.ctx.font = '50px Sans-serif'
          this.ctx.fillStyle = 'red'
          this.ctx.textAlign = 'center'
          this.ctx.fillText(
            'Game over!',
            this.ctx.canvas.width / 2,
            this.ctx.canvas.height / 2,
          )
          this.ctx.restore()
          //Paint final score
          this.ctx.save()
          this.ctx.font = '40px Sans-serif'
          this.ctx.fillStyle = 'white'
          this.ctx.textAlign = 'center'
          this.ctx.fillText(
            `Your final score is ${this.showPoints()}`,
            this.ctx.canvas.width/3.5 ,
            this.ctx.canvas.height / 1.7,
          )
          this.ctx.restore()
          
        }
      }

      stop(){
        clearInterval(this.drawInterval);

      }
}

