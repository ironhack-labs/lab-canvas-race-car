
class Game{
    constructor(ctx){
        this.ctx =ctx

        this.ctx.canvas.width = 500
        this.ctx.canvas.height = 700

        this.background= new Background(ctx)
        this.car= new Car(ctx,this.ctx.canvas.width/2,this.ctx.canvas.height/2)

        this.obstacles= []
        this.obstacleCount= 0;
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

            this.obstacleCount = 0;
          }

        }, 1000 / 60)
      }

      clear() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
      }


      draw() {
        this.background.draw()
        this.car.draw()
        this.obstacles.forEach(obstacle => obstacle.draw())

        this.ctx.save()
        this.ctx.fillText(
          `Your score is: ${this.showPoints()}`,
          this.ctx.canvas.width / 6, 50)
          this.ctx.restore()
      }

      move() {
        this.background.move()
        this.car.move()
        this.obstacles.forEach(obstacle => obstacle.move())

      }

      onKeyEvent(event){
        this.car.onKeyEvent(event)
      }

      addObstacle(){
        const maxSpace = this.ctx.canvas.width - this.car.width*2.5
        const minSpace = 250
        const theWidth = Math.random()*(maxSpace-minSpace) + minSpace

        this.obstacles.push(
          new Obstacle(this.ctx,Math.floor(Math.random()*this.ctx.canvas.width/2),0,theWidth)
        )

      }

      checkCollisions(){

        if(this.obstacles.some(obstacle => this.car.collisionWith(obstacle))){

          this.gameOver()

        }
      }

      
      showPoints(){
        this.ctx.font = '35px Verdana'
        this.ctx.fillStyle = 'white'
        this.ctx.textAlign = 'left'
          if(this.obstacles.length===1||this.obstacles.length===0){
            return 0
          }else{
            return  this.obstacles.length-1
          }
      }

      gameOver(){
        clearInterval(this.drawInterval);

        this.ctx.fillStyle = 'black'
          this.ctx.fillRect(0,0,this.ctx.canvas.width,this.ctx.canvas.height)

          
          this.ctx.save()
            this.ctx.font = '55px Verdana'
            this.ctx.fillStyle = 'red'
            this.ctx.textAlign = 'center'
            this.ctx.fillText(
              'Game over!',
              this.ctx.canvas.width / 2,
              this.ctx.canvas.height / 2,
            )
          this.ctx.restore()

         
          this.ctx.save()
            this.ctx.font = '40px Verdana'
            this.ctx.fillStyle = 'white'
            this.ctx.textAlign = 'center'
            this.ctx.fillText(
              `Your final score is ${this.showPoints()}`,
              this.ctx.canvas.width/6,
              this.ctx.canvas.height / 1.7,
            )
          this.ctx.restore()

      }
}
